---
name: Bug report
about: Create a report to help us improve
title: "[BUG]"
labels: bug
assignees: Harshit-077

---

name: 🐛 Bug Report
description: Report a bug to help us improve
labels: [bug]
title: "[BUG] <short description>"
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to report a bug! Please fill out the form below.

  - type: input
    id: environment
    attributes:
      label: Environment
      description: What environment are you seeing the problem in?
      placeholder: e.g., Windows 11, macOS Ventura, Python 3.10, Node.js v18
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of the bug.
      placeholder: Describe the issue here...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Please provide step-by-step instructions to reproduce the bug.
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What did you expect to happen?
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots or Logs
      description: If applicable, add screenshots or error logs to help explain your problem.
      placeholder: Paste logs or drag screenshots here.

  - type: dropdown
    id: priority
    attributes:
      label: Priority
      description: How critical is this bug?
      options:
        - 🔴 Critical
        - 🟠 High
        - 🟡 Medium
        - 🟢 Low

  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      options:
        - label: I have read and agree to the [Code of Conduct](../CODE_OF_CONDUCT.md)
          required: true
