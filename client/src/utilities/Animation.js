export default class Animations {
  static animations = new Animations();

  fadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen_name || !screen) return;

    console.log(screen);

    screen.style.opacity = '1';
    screen.style.transform = 'translateY(1px)';
  };
}
