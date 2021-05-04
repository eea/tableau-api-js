const TIMEOUT = 2000;
const FREQUENCY = 10;

export const tableauVersions = [
  '2.8.0',
  '2.7.0',
  '2.6.0',
  '2.5.0',
  '2.4.0',
  '2.3.0',
  '2.2.2',
  '2.1.2',
  '2.0.3',
];

export const getLatestTableauVersion = () => {
  return tableauVersions[tableauVersions.length - 1];
};

export default (version) => {
  return new Promise((resolve, reject) => {
    // TODO
    // Don't load tableau if current version is the
    // same as the new incomming version
    if (tableauVersions.indexOf(version) < 0) {
      return reject({ message: 'Wrong tableau version' });
    }
    window.tableau = undefined;
    require(`./api/tableau-${version}`);
    let clock = 0;
    const interval = setInterval(() => {
      if (window.tableau) {
        resolve({
          tableau: window.tableau,
          message: `Current tableau api version: ${version}`,
        });
        clearInterval(interval);
      }
      if (clock >= TIMEOUT) {
        clearInterval(interval);
      }
      clock += FREQUENCY;
    }, FREQUENCY);
  });
};

