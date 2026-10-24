# AssetParity transfer scenario suite

The executable coverage contract for AssetParity's first release. `index.mjs` contains five synthetic declared-observation cases. `catalog.mjs` explains which behaviors are supported, excluded or planned.

| Case | Required observation |
| --- | --- |
| Fractional transfer | Exact 1.2345678-unit debit and credit |
| Smallest asset unit | Exact 0.0000001-unit movement |
| Insufficient balance | Known balance-constraint refusal with unchanged asset balances |
| Recipient authorization | Both routes refuse an unauthorized recipient |
| Missing trustline | Both routes report the known missing-trustline category |

Fixtures are synthetic and their placeholder addresses are format-shaped, not usable accounts. The backend repository holds separately labeled real testnet evidence. Never convert a simulation rejection into a transaction receipt or call an invented snapshot observed data.

## Extend coverage

A new case needs the amount in integer base units, participants, both route outcomes, before/after balances and a rationale for the expected comparison. Retain raw errors. Unknown errors must remain reviewable. Issuer mint/burn, contract-address balances, liabilities and asset events need their own comparison rules rather than being forced into the transfer-debit model.

Run `node --test test.mjs` with the sibling backend and adapters present. The coverage catalog is also served by the campaign API and displayed in the console.
