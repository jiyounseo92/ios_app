InMyPocket GitHub Pages + Sync Setup

1) GitHub Pages
- Create a new GitHub repository (public).
- Upload everything inside this folder (web-publish) to repo root.
- GitHub repo > Settings > Pages:
  - Source: Deploy from a branch
  - Branch: main / (root)
- Wait until site URL is generated.

2) iPhone install as app (PWA)
- Open the Pages URL in Safari.
- Share > Add to Home Screen.

3) Cross-device sync using GitHub Gist
- Create a Secret Gist.
- Create one file in gist:
  - file name: inmypocket-sync.json
  - content: {"app":"inmypocket-sync-v1","updatedAt":0,"deviceId":"init","data":{"transactions":[],"settings":{},"friendsHidden":false}}
- Copy gist ID from URL.
- Create GitHub Personal Access Token with gist permission.
- In app Settings > 웹/모바일 자동 연동:
  - Sync URL: gist ID (or https://api.github.com/gists/<gist_id>)
  - Access Token: PAT
  - Enable auto sync
  - Save, then tap Sync Now on all devices once.
