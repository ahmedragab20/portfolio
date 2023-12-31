export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    grayColors: ['slate', 'cool', 'zinc', 'neutral', 'stone'],

    dropdown: {
      container:
        'max-h-[200px] overflow-x-hidden overflow-y-auto shadow-lg rounded-lg border border-slate-200 dark:border-slate-800 ring-1 ring-black ring-opacity-5',

      item: {
        icon: {
          base: '',
          active: '',
          inactive: '',
        },
      },
    },
  },
});
