import './styles.css';
export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__image" src="/assets/images/logo.svg" alt="Pokémon Unite" />
      <a href="" className="footer__button button__link">
        Jogue Pokémon Unite agora!
      </a>
      <div className="footer__links">
        <a className="footer__link" href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite">Google
          Play</a>
        <a className="footer__link" href="https://www.nintendo.com/pt_BR/games/detail/pokemon-unite-switch/">Nintendo
          Switch</a>
        <a className="footer__link" href="https://apps.apple.com/app/id1512321575">App Store</a>
      </div>
    </footer>
  );
}
