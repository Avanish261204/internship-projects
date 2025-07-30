# Recurring Date Picker Component

A comprehensive React component for selecting recurring dates with support for daily, weekly, monthly, and yearly patterns. Similar to the feature in TickTick app.

## 🚀 Features

### Recurrence Options
- **Daily**: Every X days (e.g., every 2 days)
- **Weekly**: Every X weeks with specific weekdays (e.g., every Monday and Wednesday)
- **Monthly**: Every X months with day of month or week patterns (e.g., 15th of every month, or second Tuesday of every month)
- **Yearly**: Every X years with specific month and day (e.g., January 1st every year)

### Advanced Features
- **Custom Intervals**: Set custom intervals for any recurrence type
- **Multiple Weekday Selection**: Choose multiple days of the week for weekly patterns
- **Complex Monthly Patterns**: Support for "second Tuesday of every month" type patterns
- **Date Range**: Optional end date with quick presets (1 week, 1 month, 3 months, 1 year)
- **Mini Calendar Preview**: Visual representation of generated dates
- **Real-time Updates**: Instant preview of recurring dates as you configure

## 🛠️ Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive UI
- **State Management**: Zustand for efficient state management
- **Date Handling**: date-fns for robust date operations
- **Icons**: Lucide React for clean, consistent icons
- **Testing**: Jest & React Testing Library for comprehensive testing

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd recurring-date-picker

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Usage

### Basic Usage

```tsx
import RecurringDatePicker from '@/components/RecurringDatePicker';

function MyComponent() {
  const handleDatesChange = (dates: Date[]) => {
    console.log('Generated dates:', dates);
  };

  return (
    <RecurringDatePicker
      onDatesChange={handleDatesChange}
      className="max-w-md"
    />
  );
}
```

### Advanced Usage with Custom Configuration

```tsx
import { useRecurringDateStore } from '@/store/recurringDateStore';

function AdvancedComponent() {
  const {
    startDate,
    endDate,
    recurrenceType,
    recurrenceConfig,
    generatedDates,
    setStartDate,
    setEndDate,
    setRecurrenceType,
    setRecurrenceConfig,
    generateDates
  } = useRecurringDateStore();

  // Programmatically set up a weekly pattern
  const setupWeeklyPattern = () => {
    setStartDate(new Date('2024-01-01'));
    setEndDate(new Date('2024-12-31'));
    setRecurrenceType('weekly');
    setRecurrenceConfig({
      interval: 1,
      weekDays: [1, 3, 5] // Monday, Wednesday, Friday
    });
    generateDates();
  };

  return (
    <div>
      <button onClick={setupWeeklyPattern}>
        Set up Weekly Pattern
      </button>
      <RecurringDatePicker onDatesChange={handleDatesChange} />
    </div>
  );
}
```

## 🧩 Component Structure

The component is broken down into smaller, reusable parts:

```
src/
├── components/
│   └── RecurringDatePicker/
│       ├── index.tsx              # Main component
│       ├── RecurrenceOptions.tsx  # Recurrence type and config UI
│       ├── DateRangePicker.tsx    # Start/end date selection
│       └── MiniCalendar.tsx       # Calendar preview
├── store/
│   └── recurringDateStore.ts      # Zustand store for state management
└── types/
    └── recurringDate.ts           # TypeScript type definitions
```

## 🎨 Customization

### Styling
The component uses Tailwind CSS classes and can be customized by passing a `className` prop:

```tsx
<RecurringDatePicker className="custom-styles" />
```

### Themes
You can customize the appearance by modifying the Tailwind classes in the component files.

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- **Unit Tests**: Store logic, date generation algorithms
- **Integration Tests**: Complete component functionality
- **Component Tests**: Individual component behavior

## 📋 API Reference

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onDatesChange` | `(dates: Date[]) => void` | No | Callback when dates are generated |
| `className` | `string` | No | Additional CSS classes |

### Store Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `setStartDate` | `Date \| null` | Set the start date |
| `setEndDate` | `Date \| null` | Set the end date |
| `setRecurrenceType` | `RecurrenceType` | Set recurrence type (daily/weekly/monthly/yearly) |
| `setRecurrenceConfig` | `RecurrenceConfig` | Set recurrence configuration |
| `generateDates` | - | Generate recurring dates based on current config |
| `reset` | - | Reset store to initial state |

### Types

```typescript
type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceConfig {
  interval?: number;           // Every X days/weeks/months/years
  weekDays?: number[];         // Days of week (0=Sunday, 1=Monday, etc.)
  monthDay?: number;           // Day of month (1-31)
  monthWeek?: number;          // Week of month (1-5)
  monthWeekDay?: number;       // Day of week for month pattern (0-6)
  yearMonth?: number;          // Month for yearly pattern (0-11)
  yearDay?: number;            // Day for yearly pattern (1-31)
  endAfterOccurrences?: number; // End after X occurrences
  endDate?: Date | null;       // End date
}
```

## 🎯 Examples

### Daily Pattern
```typescript
// Every 2 days
setRecurrenceType('daily');
setRecurrenceConfig({ interval: 2 });
```

### Weekly Pattern
```typescript
// Every Monday and Wednesday
setRecurrenceType('weekly');
setRecurrenceConfig({ 
  interval: 1, 
  weekDays: [1, 3] // Monday, Wednesday
});
```

### Monthly Pattern
```typescript
// 15th of every month
setRecurrenceType('monthly');
setRecurrenceConfig({ 
  interval: 1, 
  monthDay: 15 
});

// Second Tuesday of every month
setRecurrenceType('monthly');
setRecurrenceConfig({ 
  interval: 1, 
  monthWeek: 2,     // Second week
  monthWeekDay: 2   // Tuesday
});
```

### Yearly Pattern
```typescript
// January 1st every year
setRecurrenceType('yearly');
setRecurrenceConfig({ 
  interval: 1, 
  yearMonth: 0,     // January
  yearDay: 1 
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the recurring date feature in TickTick app
- Built with modern React patterns and best practices
- Uses date-fns for reliable date manipulation
- Styled with Tailwind CSS for beautiful, responsive design
