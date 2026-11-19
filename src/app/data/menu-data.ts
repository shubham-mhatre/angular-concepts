import { MenuItem } from '../shared/models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Components',
    route: '/components'
  },
  {
    title: 'Templates',
    route: '/templates'
  },
  {
    title: 'Data Binding',
    children: [
      { title: 'Interpolation', route: '/interpolation' },
      { title: 'Property Binding', route: '/property-binding' },
      { title: 'Event Binding', route: '/event-binding' },
      { title: 'Two-way Binding', route: '/two-way-binding' }
    ]
  },
  {
    title: 'Directives',
    children: [
      { title: 'Built-in Directives', route: '/built-in-directives' },
      { title: 'Custom Directives', route: '/custom-directives' }
    ]
  },
  {
    title: 'Pipes',
    children: [
      { title: 'Built-in Pipes', route: '/built-in-pipes' },
      { title: 'Custom Pipes', route: '/custom-pipes' }
    ]
  },
  { title: 'Lifecycle Hooks', route: '/lifecycle-hooks' },
  { title: 'Services', route: '/services' },
  { title: 'Dependency Injection', route: '/dependency-injection' },
  { title: 'Routing', route: '/routing' },
  {
    title: 'Forms',
    children: [
      { title: 'Template-driven Forms', route: '/template-driven-forms' },
      { title: 'Reactive Forms', route: '/reactive-forms' }
    ]
  },
  { title: 'HTTP Client', route: '/http-client' },
  { title: 'Interceptors', route: '/interceptors' },
  { title: 'Guards', route: '/guards' },
  { title: 'Lazy Loading', route: '/lazy-loading' },
  { title: 'RxJS', route: '/rxjs' },
  { title: 'Observables', route: '/observables' },
  { title: 'Subjects', route: '/subjects' },
  { title: 'Change Detection', route: '/change-detection' },
  { title: 'Signals', route: '/signals' },
  { title: 'State Management', route: '/state-management' },
  { title: 'Content Projection', route: '/content-projection' }
];