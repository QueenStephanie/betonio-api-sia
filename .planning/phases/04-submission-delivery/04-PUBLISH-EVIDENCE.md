# Phase 04 Publish Evidence

## Canonical Repository

- Repository: `MikeSordilla-lab/betonio-api-demo`
- Landing URL: https://github.com/MikeSordilla-lab/betonio-api-demo
- Git remote URL: https://github.com/MikeSordilla-lab/betonio-api-demo.git
- Default branch pushed: `master`

## Publish Command

```bash
"C:/Program Files/GitHub CLI/gh.exe" repo create MikeSordilla-lab/betonio-api-demo --public --source=. --remote=origin --push
```

Result: repository created and local branch pushed successfully.

## Quality Gate Results

All gates passed before publish evidence finalization:

```bash
npm run test:rows
npm run test:phase2-api
npm run test:phase3-filter
npm run lint
npm run build
```

Observed status summary:

- `test:rows`: PASS (12 tests)
- `test:phase2-api`: PASS (3 tests)
- `test:phase3-filter`: PASS (4 tests)
- `lint`: PASS
- `build`: PASS

## Canonical URL Consistency Check

The same canonical URL is present in:

- This evidence file
- `README.md` under "Submission Repository URL"
- `.planning/phases/04-submission-delivery/04-SUBMISSION-HANDOFF.md`
