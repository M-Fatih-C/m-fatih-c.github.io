---
{
  'slug': 'risemate-ios',
  'title': 'RiseMate — iOS',
  'categories': ['software', 'mobile'],
  'technologies': ['Swift', 'SwiftUI', 'MVVM', 'Firebase', 'WebRTC'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Private SwiftUI iOS prototype exploring profiles, matching and communication around skills people can teach and want to learn.',
  'description': 'RiseMate is an iOS social-app prototype exploring reciprocal skill exchange. Skills people can teach and want to learn shape profile discovery and matching. The SwiftUI client develops that product idea through profile, messaging and community screens. Earlier Kotlin and Flutter clients are preserved as a separate historical archive.',
  'role': 'iOS application development focused on SwiftUI screens, feature-based organization and client-service integrations.',
  'problem': 'People who want to learn a skill and people able to teach it do not always have complementary interests. The product explores a reciprocal approach: make both teaching and learning interests visible, then provide a path from discovering a suitable profile to communicating with that person.',
  'solution': 'The SwiftUI client organizes profiles, discovery, matching and communication into feature-oriented screens. Model and service responsibilities are separated from presentation, with Firebase integrations for identity and data. Experimental calling and AI-related components exist in source but are not presented as accepted live features. A review-branch target-configuration fix enabled an unsigned simulator build.',
  'architecture':
    [
      'SwiftUI screens and feature-oriented view models',
      'Shared models and client-service responsibilities',
      'Firebase identity and data integrations',
      'Calling and experimental services evaluated separately',
    ],
  'features':
    [
      'Profiles with teaching and learning interests',
      'Profile discovery and matching flows',
      'Messaging and community screens',
      'Experimental calling integration',
    ],
  'technicalChallenges':
    [
      'Organizing multiple social features in a coherent client structure',
      'Distinguishing source presence from verified live behavior',
      'Checking source-file membership in the Xcode target',
    ],
  'decisions':
    [
      'Keep the Swift client separate from earlier Kotlin/Flutter implementations',
      'Separate presentation, model and service responsibilities',
      'Report simulator builds separately from device and service acceptance',
    ],
  'testing':
    [
      'On the 7 November 2026 review branch, adding an existing source file to the Xcode target enabled an unsigned arm64 iOS Simulator build.',
      'Physical devices, live calls, push, Firebase setup and real-user workflows were not tested.',
    ],
  'results':
    [
      'Fixed a target-configuration issue blocking the review-branch simulator build.',
      'Documented the Swift client scope and its distinction from the historical mobile archive.',
    ],
  'limitations':
    [
      'Development prototype; no claim of active users or production service.',
      'No established automated application test suite was found.',
      'Calls, push and external-service configuration require separate validation.',
      'Real profiles, messages, photos and device data are not shared.',
    ],
  'projectId': 'risemate-ios',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'order': 12,
  'related': ['risemate-mobile-legacy', 'macpilot'],
}
---
