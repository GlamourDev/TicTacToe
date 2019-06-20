export default class StringCollection {
  title: string;

  subtitle: string;

  templates: any;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.templates = {
      startGame: {
        title: 'Click on cell to start the game.',
        subtitle: '',
      },
      gameProgress: {
        title: 'Game in progress...',
        subtitle: '',
      },
      playerWin: {
        title: 'Congratulations, you won!',
        subtitle: 'Do you want restart the game?',
      },
      aiWin: {
        title: 'AI won',
        subtitle: 'Do you want restart the game?',
      },
      nooneWin: {
        title: "It's a tie",
        subtitle: 'Do you want restart the game?',
      },
    };
  }

  setTemplates(templatesName: string) {
    let needTemplate;

    if ((needTemplate = this.templates[templatesName])) {
      const { title, subtitle } = needTemplate;

      this.title = title;
      this.subtitle = subtitle;
    }
  }
}
