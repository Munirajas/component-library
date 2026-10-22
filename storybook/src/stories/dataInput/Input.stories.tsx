import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/dataInput/Input';
import { CalendarIcon, ClockIcon } from '@/icons/icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input field with support for different types, states, validation, and additional features like auto-cleaning.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Input label'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type'
    },
    value: {
      control: { type: 'text' },
      description: 'Input controlled value.'
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Default input value.'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable input'
    },
    error: {
      control: { type: 'text' },
      description: 'Error message.'
    },
    helpText: {
      control: { type: 'text' },
      description: 'Help text.'
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Clean the input value.'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mark the input as required.'
    },
    onChange: {
      action: 'changed',
      description: 'Function executed on value chages.'
    },
    onClear: {
      action: 'cleared',
      description: 'Function executed on value cleared'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const InputDefault: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text'
  }
};

// Diferentes tipos de entrada
export const InputVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input
        label="Text"
        placeholder="Text field"
        type="text"
      />

      <Input
        label="Email"
        placeholder="user@test.com"
        type="email"
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
      />

      <Input
        label="Number"
        placeholder="123456789"
        type="number"
      />

      <Input
        label="Phone"
        placeholder="+1 234 567 8900"
        type="tel"
      />

      <Input
        label="URL"
        placeholder="https://test.com"
        type="url"
      />

      <Input
        label="Search"
        placeholder="Search..."
        type="search"
      />

      <Input
        label="Date"
        placeholder="MM/DD/YYYY"
        type="date"
      />

      <Input
        type='datetime-local'
        placeholder='MM/DD/YYYY mm/ss'
        label='Date Time Local'
        rightIcon={<CalendarIcon />}
      />

      <Input
        label='Time'
        placeholder='mm/ss'
        type='time'
        rightIcon={<ClockIcon />}
      />

      <Input
        label="Textarea"
        placeholder="Enter text here"
        type="textarea"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all the available input types.'
      }
    }
  }
};

// Input states
export const InputStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input
        label="Default Field "
        placeholder="Default state"
        helpText="Default field state"
      />

      <Input
        label="Field with error"
        placeholder="Field with error"
        error="This field is required"
      />

      <Input
        label="Disabled field"
        placeholder="Can not be modified"
        disabled
        helpText="This field is disabled"
      />

      <Input
        label="Required Field"
        placeholder="Required field"
        required
        helpText="Field is required"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Show different field states: default, error, disabled and required.'
      }
    }
  }
};

// Field con funcionalidad de limpieza
export const InputClearable: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input
        label="Clearable Field"
        placeholder="Enter some text, then clear it."
        clearable
        helpText="Clic on the X to clear the field"
      />

      <Input
        label="Clearable search"
        placeholder="Item search..."
        type="search"
        clearable
        helpText="Field search with clear button."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Fields that includes a button to clear the fields.'
      }
    }
  }
};

// Fields with default values.
export const InputWithDefaultValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input
        label="Name"
        defaultValue="Enter some text."
        helpText="Default value"
      />

      <Input
        label="Email"
        defaultValue="some@example.com"
        type="email"
        helpText="Pre-defined Email"
      />

      <Input
        label="Age"
        defaultValue="25"
        type="number"
        helpText="Enter your age."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Fields that load the default settings.'
      }
    }
  }
};

// Fields con validación
export const InputWithValidation: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input
        label="Email (Required)"
        placeholder="username@example.com"
        type="email"
        required
        error="Please enter a valid email"
      />

      <Input
        label="Password"
        placeholder="8 characters minimum"
        type="password"
        helpText="Password must be 8 characters"
      />

      <Input
        label="Confirm the password"
        placeholder="Repit your password"
        type="password"
        error="Passwords do not match"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Field with different validation types and error messages.'
      }
    }
  }
};

// Interactive Field
export const InputInteractive: Story = {
  args: {
    label: 'Interactive Field',
    placeholder: 'Write something here...',
    type: 'text',
    clearable: true,
    helpText: 'Interactive field.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive field that can be personalized with Storybook controls.'
      }
    }
  }
};