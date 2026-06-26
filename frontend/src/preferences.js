const defaults = {
  theme: 'system',
  quizSize: 5,
  reducedMotion: false,
}

export function readPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem('quizly-preferences'))
    return { ...defaults, ...saved }
  } catch {
    return defaults
  }
}

export function applyPreferences(preferences) {
  const systemUsesDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const useDark =
    preferences.theme === 'dark' || (preferences.theme === 'system' && systemUsesDark)

  document.documentElement.dataset.theme = useDark ? 'dark' : 'light'
  document.documentElement.dataset.motion = preferences.reducedMotion
    ? 'reduced'
    : 'full'
}

export function savePreferences(preferences) {
  localStorage.setItem('quizly-preferences', JSON.stringify(preferences))
  applyPreferences(preferences)
}
