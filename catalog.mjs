export const coverage=[
{id:'fractional-transfer',name:'Fractional transfer',description:'Compare exact 1.2345678-unit debits and credits.',expected:'OK',status:'supported'},
{id:'one-stroop',name:'Smallest asset unit',description:'Verify a 0.0000001-unit transfer without floating-point rounding.',expected:'OK',status:'supported'},
{id:'insufficient-balance',name:'Insufficient balance',description:'Preserve raw failures while comparing the broader balance-constraint category.',expected:'BALANCE_CONSTRAINT',status:'supported'},
{id:'unauthorized-recipient',name:'Issuer authorization',description:'Compare refusal when a recipient is not authorized to hold the asset.',expected:'NOT_AUTHORIZED',status:'supported'},
{id:'missing-trustline',name:'Missing trustline',description:'Compare account-to-account transfers when the recipient has no trustline.',expected:'MISSING_TRUSTLINE',status:'supported'},
{id:'fees',name:'Native XLM fees',description:'Shown separately; classic and Soroban fees are not expected to match.',status:'excluded'},
{id:'issuer',name:'Issuer mint / burn',description:'Issuer endpoints are outside the debit-credit transfer model.',status:'planned'},
{id:'events',name:'Unified asset events',description:'Event normalization and provenance checks are a separate future suite.',status:'planned'},
{id:'contract-balances',name:'Contract-address balances',description:'Persistent contract balances require an i128 model, unlike classic int64 trustlines.',status:'planned'}
];
