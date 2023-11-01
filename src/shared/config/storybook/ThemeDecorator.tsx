import type { StoryFn } from "@storybook/react";
import { ThemeProvider, type Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (them: Theme) =>
  function ThemeDecorator(ComponentStory: StoryFn) {
    return (
      <ThemeProvider initialTheme={them}>
        <div className={`app ${them}`}>
          <ComponentStory />
        </div>
      </ThemeProvider>
    );
  };
