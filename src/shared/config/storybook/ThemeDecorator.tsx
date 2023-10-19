import type { StoryFn } from "@storybook/react";
import type { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (them: Theme) => (ComponentStory: StoryFn) => {
  return (
    <div className={`app ${them}`}>
      <ComponentStory />
    </div>
  );
};
