---
name: Feature request
about: Suggest an idea for this project
title: "[FEATURE]"
labels: enhancement
assignees: Harshit-077

---

name: 💡 Feature Request
description: Suggest an idea for this project
labels: [enhancement]
title: "[FEATURE] <short description>"
body:
  - type: markdown
    attributes:
      value: |
        Thank you for taking the time to suggest a feature! Please fill out the form below to help us understand your request.

  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we reach you if we need more info?
      placeholder: GitHub username or email (optional)

  - type: textarea
    id: feature-description
    attributes:
      label: Describe the feature
      description: A clear and concise description of the feature you’d like to see.
      placeholder: What problem does this feature solve?

  - type: textarea
    id: proposed-solution
    attributes:
      label: Proposed Solution
      description: How do you think this should be implemented?
      placeholder: Tell us how you envision this feature working.

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: Have you considered any alternative solutions?
      placeholder: List other possible approaches, even if you discarded them.

  - type: textarea
    id: additional-context
    attributes:
      label: Additional Context
      description: Add any other context, screenshots, or mockups about the feature request here.

  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      options:
        - label: I have read and agree to the [Code of Conduct](../CODE_OF_CONDUCT.md)
          required: true
