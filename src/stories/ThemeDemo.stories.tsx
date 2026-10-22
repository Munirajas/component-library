import type { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "@/components/ui";
import { Button } from "@/components/actions/Button";
import { ColorSystemSelector } from "@/components/ui/ColorSystemSelector";

const meta: Meta = {
  title: "Theme/Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const ThemeDemo: Story = {
  render: () => (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto p-8">
        {/* ThemeToggle en la parte superior */}
        <div className="mb-8 text-center">
          <DarkModeToggle showLabel={false} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Theme Demo
        </h1>

        <ColorSystemSelector showLabels={true} size="sm" className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Light/Dark Card
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This changes automaticaly between light and dark.
            </p>
            <Button size="md" variant="primary">
              Action Button
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Color System
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-cta-primary rounded"></div>
                <span className="text-cta-primary dark:text-gray-300">
                  Primary
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-500 rounded"></div>
                <span className="text-secondary dark:text-gray-300">
                  Secondary
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-success dark:text-gray-300">Success</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6 border border-blue-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Gradient
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Los gradientes también se adaptan al tema seleccionado.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Usa el control de tema en la barra de herramientas para cambiar
              entre modo claro y oscuro.
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
