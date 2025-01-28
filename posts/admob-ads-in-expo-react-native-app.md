---
title: 'How to Add AdMob Ads to Your Expo React Native App'
date: '2025-01-28'
excerpt: 'Step-by-step guide to implementing Google AdMob ads in Expo React Native apps with rewarded ads, banners, and interstitials.'
tags: [React Native, Expo, AdMob, Mobile Ads, Mobile Development]
category: 'Mobile Development'
---

# How to Add AdMob Ads to Your Expo React Native App (2025)

Step-by-step guide to implementing Google AdMob ads in Expo React Native apps with rewarded ads, banners, and interstitials using Expo's native module.

## Why AdMob?

Google AdMob is the leading mobile advertising platform for several compelling reasons. It offers industry-standard monetization features, supports multiple high-performing ad formats (especially rewarded videos), and integrates seamlessly with Expo projects. This makes it an ideal choice for React Native developers looking to monetize their applications.

## Setup and Configuration

### 1. Install the AdMob Package

First, install the required package using Expo's installation command:

```bash
npx expo install react-native-google-mobile-ads
```

### 2. Configure App IDs

Add the following configuration to your `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "iosAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx"
        }
      ]
    ]
  }
}
```

## Initialization

To get started, initialize AdMob in your app's root component:

```javascript
import mobileAds from 'react-native-google-mobile-ads';

// Initialize once at app startup
mobileAds()
  .initialize()
  .then(() => console.log('AdMob initialized'));
```

## Implementing Ad Formats

### Rewarded Ads

Here's how to implement rewarded video ads:

```javascript
import { RewardedAd, TestIds } from 'react-native-google-mobile-ads';

const rewarded = RewardedAd.createForAdRequest(
  __DEV__ ? TestIds.REWARDED : 'LIVE-REWARDED-AD-UNIT-ID'
);

// Load ad
rewarded.load();

// Show ad (after load completes)
rewarded.show();
```

### Banner Ads

Implement banner ads using this component:

```jsx
<BannerAd
  unitId={_DEV__ ? TestIds.BANNER : 'LIVE-BANNER-AD-UNIT-ID'}
  size="BANNER"
  onAdFailedToLoad={(error) => console.error(error)}
/>
```

### Interstitial Ads

Here's the implementation for interstitial ads:

```javascript
const interstitial = InterstitialAd.createForAdRequest(
  _DEV__ ? TestIds.INTERSTITIAL : 'LIVE-INTERSTITIAL-AD-UNIT-ID'
);

// Preload during natural pauses
interstitial.load();

// Display between screens
interstitial.show();
```

## Event Handling

Here's how to handle ad events in your app:

```javascript
import { AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';

// Handle ad close event
rewarded.addAdEventListener(AdEventType.CLOSED, () => {
  console.log('Ad closed');
});

// Handle ad load event
rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  console.log('Ad loaded successfully');
});
```

## Testing Strategy

During development, use test IDs to ensure safe testing:

```javascript
// Use test IDs for safe development
**DEV** ? TestIds.REWARDED : 'YOUR-LIVE-AD-UNIT-ID'
```

## Conclusion

You've now successfully implemented the following AdMob features:

✅ AdMob initialization  
✅ Rewarded ad workflow  
✅ Banner ad integration  
✅ Interstitial setup

Before publishing your app, remember to replace all test IDs with your actual AdMob unit IDs. For more advanced implementations, consider exploring:

- Frequency capping
- Adaptive banner sizing

> **Important**: Always thoroughly test your ads and ensure compliance with [AdMob policies](https://admob.google.com/home/) to avoid any account restrictions.
