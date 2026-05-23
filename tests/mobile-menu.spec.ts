import { test, expect, devices } from "@playwright/test";

const BASE_URL = "http://localhost:4321";

test.use({ ...devices["iPhone 12"] });

test.describe("Mobile menu & language selector", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState("networkidle");
  });

  test("hamburger bars are visible on dark background", async ({ page }) => {
    const bars = page.locator("[data-aw-toggle-menu] span[aria-hidden]");
    await expect(bars.first()).toBeVisible();
    const color = await bars.first().evaluate((el) =>
      getComputedStyle(el).backgroundColor
    );
    // Should be light (E8E0D2 = rgb(232, 224, 210)) not black
    expect(color).not.toBe("rgb(0, 0, 0)");
  });

  test("hamburger button opens mobile menu", async ({ page }) => {
    const toggleBtn = page.locator("[data-aw-toggle-menu]");
    const mobileMenu = page.locator("#mobile-menu");

    await expect(mobileMenu).toBeHidden();
    await toggleBtn.click();
    await expect(mobileMenu).toBeVisible();
  });

  test("hamburger button closes mobile menu on second click", async ({
    page,
  }) => {
    const toggleBtn = page.locator("[data-aw-toggle-menu]");
    const mobileMenu = page.locator("#mobile-menu");

    await toggleBtn.click();
    await expect(mobileMenu).toBeVisible();
    await toggleBtn.click();
    await expect(mobileMenu).toBeHidden();
  });

  test("language selector in header bar opens dropdown", async ({ page }) => {
    // The mobile lang selector is the second [data-lang-selector] in DOM
    const mobileLangSelector = page.locator("[data-lang-selector]").nth(1);
    const trigger = mobileLangSelector.locator("[data-lang-trigger]");
    const dropdown = mobileLangSelector.locator("[data-lang-dropdown]");

    await expect(dropdown).toBeHidden();
    await trigger.click();
    await expect(dropdown).toBeVisible();
  });

  test("language selector dropdown closes on outside click", async ({
    page,
  }) => {
    const mobileLangSelector = page.locator("[data-lang-selector]").nth(1);
    const trigger = mobileLangSelector.locator("[data-lang-trigger]");
    const dropdown = mobileLangSelector.locator("[data-lang-dropdown]");

    await trigger.click();
    await expect(dropdown).toBeVisible();
    await page.locator("body").click({ position: { x: 10, y: 400 } });
    await expect(dropdown).toBeHidden();
  });

  test("mobile menu contains language selector section", async ({ page }) => {
    const toggleBtn = page.locator("[data-aw-toggle-menu]");
    await toggleBtn.click();

    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();
    await expect(mobileMenu.getByText("Idioma / Language")).toBeVisible();
  });

  test("language links inside mobile menu navigate correctly", async ({
    page,
  }) => {
    const toggleBtn = page.locator("[data-aw-toggle-menu]");
    await toggleBtn.click();

    const mobileMenu = page.locator("#mobile-menu");
    const enLink = mobileMenu.locator("a").filter({ hasText: "English" });
    await expect(enLink).toBeVisible();
    const href = await enLink.getAttribute("href");
    expect(href).toContain("/en");
  });

  test("desktop language selector is not affected by mobile fix", async ({
    page: desktopPage,
  }) => {
    // Test on desktop viewport
    await desktopPage.setViewportSize({ width: 1280, height: 800 });
    await desktopPage.goto(BASE_URL);

    const desktopLangSelector = desktopPage
      .locator("[data-lang-selector]")
      .first();
    const trigger = desktopLangSelector.locator("[data-lang-trigger]");
    const dropdown = desktopLangSelector.locator("[data-lang-dropdown]");

    await expect(dropdown).toBeHidden();
    await trigger.click();
    await expect(dropdown).toBeVisible();
  });
});
