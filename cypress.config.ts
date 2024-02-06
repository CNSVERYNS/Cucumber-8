import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1980,
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },

    env: {
      filterSpecs: true,
      // Without this command below, it will skip other tests so it is causing our test execution to be blow
      // So adding this command below will completely ignore the tests other than our @tag defined in the CLI
      omitFiltered: true,
    },

    // pretty plugin output to get readable terminal results
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter")
  },
});