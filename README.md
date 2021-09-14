# Detect Netlify Deployment URL (Github action)

Detect deployment URL of Netlify build in Netlify bot comment

## Inputs

### `regex`

RegExp to detect URL.

Example: `https://deploy-preview-(.*?)--myproject.netlify.app`

## Outputs

### `url`

The parsed URL.

## Example usage

```
on: issue_comment

jobs:
  detect_url:
    name: Detect Netlify Deployment URL
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Comment on PR #${{ github.event.issue.number }}"
      - name: Detect URL step
        id: netlify
        uses: backflip/detect-netlify-deployment-url-action@v1.0
        with:
          regex: 'https://deploy-preview-(.*?)--myproject.netlify.app'
      - run: echo "Found ${{ steps.netlify.outputs.url }}"
```
