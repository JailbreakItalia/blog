import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tutto sul Jailbreak',
    Svg: require('@site/static/img/lock.svg').default,
    description: (
      <>
        Da noi puoi trovare tutte le guide per eseguire il Jailbreak sul tuo dispositivo iOS/iPadOS!
      </>
    ),
  },
  {
    title: 'Guide per tutti',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Dispositivo non compatibile col Jailbreak? Nessun problema, 
        qui trovi anche molte guide utili adatte a tutti gli iDevice.
      </>
    ),
  },
  {
    title: 'Tieniti aggiornato!',
    Svg: require('@site/static/img/news.svg').default,
    description: (
      <>
        Rimani aggiornato sulle ultime novità sul mondo Apple e Jailbreak, iscriviti
        al nostro <a href="https://t.me/JailbreakItaliaNews">Canale News</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
