import "@testing-library/jest-dom";

Object.assign(navigator, {
  clipboard: { writeText: () => Promise.resolve() },
});

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
