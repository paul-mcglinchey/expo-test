const IS_DEV = process.env.APP_ENVIRONMENT === 'development'

export default {
  expo: {
    name: IS_DEV ? 'Expo Test (Dev)' : 'Expo Test',
    slug: 'expo-test',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      bundleIdentifier: IS_DEV ? 'com.paulmcglinchey.expotest.dev' : 'com.paulmcglinchey.expotest',
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: IS_DEV ? 'com.paulmcglinchey.expotest.dev' : 'com.paulmcglinchey.expotest'
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png'
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff'
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: 'aff31b26-77dd-4196-b554-2dff248f3b33'
      }
    },
    runtimeVersion: {
      policy: 'appVersion'
    },
    updates: {
      url: 'https://u.expo.dev/aff31b26-77dd-4196-b554-2dff248f3b33'
    }
  }
}
