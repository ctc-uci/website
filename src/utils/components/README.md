# Team Display Components

A responsive team profile display system built with Chakra UI and React. This system provides a clean, modern way to showcase team members with rounded corner profile cards and responsive navigation.

## Components

### 1. ProfileCard

Displays individual team member profiles with:

- Rounded corner square format (20px border radius)
- Image with overlay gradient
- Name and role text overlay
- Optional LinkedIn link with external link icon
- Hover effects for better interactivity

### 2. TabController

Desktop navigation component featuring:

- Chakra UI tabs with custom styling
- Responsive tab layout
- Custom color scheme (blue)
- Smooth transitions and hover effects

### 3. DropdownController

Mobile navigation component featuring:

- Clean select dropdown
- Centered layout with label
- Consistent styling with desktop version
- Touch-friendly interface

### 4. TeamDisplay

Main component that orchestrates the entire system:

- Responsive behavior (tabs on desktop, dropdown on mobile)
- State management for active tab
- Grid layout for profile cards
- Breakpoint-based component switching

## Usage

```tsx
import { TeamDisplay } from "../utils/components";
import { BOARD_DATA, CLCHC_DATA, GCF_DATA, ELDR_DATA } from "../utils/TeamData";

const MyTeamPage = () => {
 const labels = ["Board", "CLCHC", "GCF", "ELDR"];
 const teamData = [BOARD_DATA, CLCHC_DATA, GCF_DATA, ELDR_DATA];

 return <TeamDisplay teamData={teamData} labels={labels} />;
};
```

## Props

### TeamDisplay Props

- `teamData: Profile[][]` - Array of team member arrays
- `labels: string[]` - Labels for tabs/dropdown (e.g., ['Board', 'CLCHC', 'GCF', 'ELDR'])

### ProfileCard Props

- `profile: Profile` - Team member data object

### TabController Props

- `labels: string[]` - Tab labels
- `children: React.ReactNode[]` - Tab panel content
- `activeTab: number` - Currently active tab index
- `onTabChange: (index: number) => void` - Tab change handler

### DropdownController Props

- `labels: string[]` - Dropdown options
- `activeTab: number` - Currently selected option index
- `onTabChange: (index: number) => void` - Selection change handler

## Responsive Behavior

- **Desktop (md and up)**: Shows tabs with horizontal layout
- **Mobile (base to md)**: Shows dropdown select menu
- **Grid Layout**: Responsive grid that adapts to screen size:
  - Mobile: 1 column
  - Small: 2 columns
  - Medium: 3 columns
  - Large: 4 columns

## Customization

### Labels

Easily customize the displayed labels by modifying the `labels` array:

```tsx
const labels = ["Board", "CLCHC", "GCF", "ELDR"]; // Customize these
```

### Styling

All components use Chakra UI's theme system and can be customized through:

- Color schemes
- Spacing values
- Border radius
- Typography
- Hover effects

## Example Implementation

See `TeamPageExample.tsx` for a complete implementation example with proper container styling and headings.

## Dependencies

- @chakra-ui/react
- @chakra-ui/icons
- react
- react-dom
- framer-motion (for animations)
