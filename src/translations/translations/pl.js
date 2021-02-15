import createTranslation from '../create-translation'

const translation = createTranslation({
  // profile
  Follow: () => 'Obserwuj',
  Unfollow: () => 'Przestań obserwować',
  'Edit profile': () => 'Edytuj profil',
  'Display name': () => 'Wyświetlana nazwa',
  Description: () => 'Opis',
  'Thumbnail URL': () => 'Adres URL zdjęcia profilowego',
  'Banner URL': () => 'Adres URL zdjęcia w tle',

  // menu
  Home: () => 'Główna',
  Profile: () => 'Profil',
  Search: () => 'Szukaj',
  'Search user ID': () => 'Szukaj numeru ID użytkownika',
  Peers: () => 'Sieć',
  'Connected peers': () => 'Połączono z siecią',
  'Connecting to peers': () => 'Łączenie z siecią',
  Following: () => 'Obserwujesz',
  'Not following anyone': () => 'Nie obserwujesz nikogo',
  Export: () => 'Eksport',
  Import: () => 'Import',
  Feed: () => 'Aktualności',

  // post
  'Uncensorable content': () => 'Dowolna treść bez cenzury',
  Post: () => 'Opublikuj',
  'Copied to clipboard': () => 'Skopiowane do schowka',
  Share: () => 'Udostępnij',

  // global
  'URL expired': () => 'Adres URL jest nieaktualny'
})

export default translation
