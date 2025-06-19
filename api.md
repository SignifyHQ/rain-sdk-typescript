# Applications

## Company

Types:

- <code><a href="./src/resources/applications/company/company.ts">IssuingApplication</a></code>
- <code><a href="./src/resources/applications/company/company.ts">IssuingApplicationPerson</a></code>
- <code><a href="./src/resources/applications/company/company.ts">IssuingCompany</a></code>
- <code><a href="./src/resources/applications/company/company.ts">PhysicalAddress</a></code>
- <code><a href="./src/resources/applications/company/company.ts">CompanyRetrieveResponse</a></code>

Methods:

- <code title="post /applications/company">client.applications.company.<a href="./src/resources/applications/company/company.ts">create</a>({ ...params }) -> IssuingCompany</code>
- <code title="get /applications/company/{companyId}">client.applications.company.<a href="./src/resources/applications/company/company.ts">retrieve</a>(companyID) -> CompanyRetrieveResponse</code>
- <code title="patch /applications/company/{companyId}">client.applications.company.<a href="./src/resources/applications/company/company.ts">update</a>(companyID, { ...params }) -> IssuingCompany</code>
- <code title="put /applications/company/{companyId}/reapply">client.applications.company.<a href="./src/resources/applications/company/company.ts">reapply</a>(companyID, { ...params }) -> IssuingCompany</code>
- <code title="put /applications/company/{companyId}/document">client.applications.company.<a href="./src/resources/applications/company/company.ts">uploadDocument</a>(companyID, { ...params }) -> void</code>

### Ubo

Methods:

- <code title="patch /applications/company/{companyId}/ubo/{uboId}">client.applications.company.ubo.<a href="./src/resources/applications/company/ubo/ubo.ts">update</a>(uboID, { ...params }) -> IssuingCompany</code>
- <code title="put /applications/company/{companyId}/ubo/document">client.applications.company.ubo.<a href="./src/resources/applications/company/ubo/ubo.ts">uploadDocument</a>(companyID, { ...params }) -> void</code>

#### Document

Methods:

- <code title="put /applications/company/{companyId}/ubo/{uboId}/document">client.applications.company.ubo.document.<a href="./src/resources/applications/company/ubo/document.ts">upload</a>(uboID, { ...params }) -> void</code>

## User

Types:

- <code><a href="./src/resources/applications/user.ts">IssuingUser</a></code>
- <code><a href="./src/resources/applications/user.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="post /applications/user">client.applications.user.<a href="./src/resources/applications/user.ts">create</a>({ ...params }) -> IssuingUser</code>
- <code title="get /applications/user/{userId}">client.applications.user.<a href="./src/resources/applications/user.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="patch /applications/user/{userId}">client.applications.user.<a href="./src/resources/applications/user.ts">update</a>(userID, { ...params }) -> IssuingUser</code>
- <code title="post /applications/user/initiate">client.applications.user.<a href="./src/resources/applications/user.ts">initiate</a>({ ...params }) -> IssuingUser</code>
- <code title="put /applications/user/{userId}/reapply">client.applications.user.<a href="./src/resources/applications/user.ts">reapply</a>(userID, { ...params }) -> IssuingUser</code>
- <code title="put /applications/user/{userId}/document">client.applications.user.<a href="./src/resources/applications/user.ts">uploadDocument</a>(userID, { ...params }) -> void</code>

# Balances

Types:

- <code><a href="./src/resources/balances.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /balances">client.balances.<a href="./src/resources/balances.ts">retrieve</a>() -> BalanceRetrieveResponse</code>

# Cards

Types:

- <code><a href="./src/resources/cards/cards.ts">IssuingCard</a></code>
- <code><a href="./src/resources/cards/cards.ts">IssuingCardLimit</a></code>
- <code><a href="./src/resources/cards/cards.ts">IssuingCardStatus</a></code>
- <code><a href="./src/resources/cards/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/cards/cards.ts">CardRetrieveSecretsResponse</a></code>

Methods:

- <code title="get /cards/{cardId}">client.cards.<a href="./src/resources/cards/cards.ts">retrieve</a>(cardID) -> IssuingCard</code>
- <code title="patch /cards/{cardId}">client.cards.<a href="./src/resources/cards/cards.ts">update</a>(cardID, { ...params }) -> IssuingCard</code>
- <code title="get /cards">client.cards.<a href="./src/resources/cards/cards.ts">list</a>({ ...params }) -> CardListResponse</code>
- <code title="get /cards/{cardId}/secrets">client.cards.<a href="./src/resources/cards/cards.ts">retrieveSecrets</a>(cardID, { ...params }) -> CardRetrieveSecretsResponse</code>

## Pin

Types:

- <code><a href="./src/resources/cards/pin.ts">PinRetrieveResponse</a></code>

Methods:

- <code title="get /cards/{cardId}/pin">client.cards.pin.<a href="./src/resources/cards/pin.ts">retrieve</a>(cardID, { ...params }) -> PinRetrieveResponse</code>
- <code title="put /cards/{cardId}/pin">client.cards.pin.<a href="./src/resources/cards/pin.ts">update</a>(cardID, { ...params }) -> void</code>

# Companies

Types:

- <code><a href="./src/resources/companies/companies.ts">IssuingChargeCreateBody</a></code>
- <code><a href="./src/resources/companies/companies.ts">IssuingChargeCreateResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">IssuingContract</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyListResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyInitiatePaymentResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveBalancesResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveContractsResponse</a></code>

Methods:

- <code title="get /companies/{companyId}">client.companies.<a href="./src/resources/companies/companies.ts">retrieve</a>(companyID) -> IssuingCompany</code>
- <code title="patch /companies/{companyId}">client.companies.<a href="./src/resources/companies/companies.ts">update</a>(companyID, { ...params }) -> IssuingCompany</code>
- <code title="get /companies">client.companies.<a href="./src/resources/companies/companies.ts">list</a>({ ...params }) -> CompanyListResponse</code>
- <code title="post /companies/{companyId}/charges">client.companies.<a href="./src/resources/companies/companies.ts">charge</a>(companyID, { ...params }) -> IssuingChargeCreateResponse</code>
- <code title="post /companies/{companyId}/users">client.companies.<a href="./src/resources/companies/companies.ts">createUser</a>(companyID, { ...params }) -> IssuingUser</code>
- <code title="post /companies/{companyId}/payments">client.companies.<a href="./src/resources/companies/companies.ts">initiatePayment</a>(companyID, { ...params }) -> CompanyInitiatePaymentResponse</code>
- <code title="get /companies/{companyId}/balances">client.companies.<a href="./src/resources/companies/companies.ts">retrieveBalances</a>(companyID) -> CompanyRetrieveBalancesResponse</code>
- <code title="get /companies/{companyId}/contracts">client.companies.<a href="./src/resources/companies/companies.ts">retrieveContracts</a>(companyID) -> CompanyRetrieveContractsResponse</code>

## Signatures

Types:

- <code><a href="./src/resources/companies/signatures.ts">IssuingSignature</a></code>

Methods:

- <code title="get /companies/{companyId}/signatures/payments">client.companies.signatures.<a href="./src/resources/companies/signatures.ts">retrievePaymentSignature</a>(companyID, { ...params }) -> IssuingSignature</code>
- <code title="get /companies/{companyId}/signatures/withdrawals">client.companies.signatures.<a href="./src/resources/companies/signatures.ts">retrieveWithdrawalSignature</a>(companyID, { ...params }) -> IssuingSignature</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="get /contracts">client.contracts.<a href="./src/resources/contracts.ts">list</a>() -> ContractListResponse</code>

# Disputes

Types:

- <code><a href="./src/resources/disputes/disputes.ts">IssuingDispute</a></code>
- <code><a href="./src/resources/disputes/disputes.ts">DisputeListResponse</a></code>

Methods:

- <code title="get /disputes/{disputeId}">client.disputes.<a href="./src/resources/disputes/disputes.ts">retrieve</a>(disputeID) -> IssuingDispute</code>
- <code title="patch /disputes/{disputeId}">client.disputes.<a href="./src/resources/disputes/disputes.ts">update</a>(disputeID, { ...params }) -> void</code>
- <code title="get /disputes">client.disputes.<a href="./src/resources/disputes/disputes.ts">list</a>({ ...params }) -> DisputeListResponse</code>

## Evidence

Methods:

- <code title="get /disputes/{disputeId}/evidence">client.disputes.evidence.<a href="./src/resources/disputes/evidence.ts">list</a>(disputeID) -> Response</code>
- <code title="put /disputes/{disputeId}/evidence">client.disputes.evidence.<a href="./src/resources/disputes/evidence.ts">upload</a>(disputeID, { ...params }) -> void</code>

# Keys

Types:

- <code><a href="./src/resources/keys.ts">KeyCreateResponse</a></code>

Methods:

- <code title="post /keys">client.keys.<a href="./src/resources/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="delete /keys/{keyId}">client.keys.<a href="./src/resources/keys.ts">delete</a>(keyID) -> void</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentInitiateResponse</a></code>

Methods:

- <code title="post /payments">client.payments.<a href="./src/resources/payments.ts">initiate</a>({ ...params }) -> PaymentInitiateResponse</code>

# Signatures

Methods:

- <code title="get /signatures/payments">client.signatures.<a href="./src/resources/signatures.ts">retrievePaymentSignature</a>({ ...params }) -> IssuingSignature</code>
- <code title="get /signatures/withdrawals">client.signatures.<a href="./src/resources/signatures.ts">retrieveWithdrawalSignature</a>({ ...params }) -> IssuingSignature</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">IssuingTransaction</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(transactionID) -> IssuingTransaction</code>
- <code title="patch /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">update</a>(transactionID, { ...params }) -> void</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="post /transactions/{transactionId}/disputes">client.transactions.<a href="./src/resources/transactions/transactions.ts">createDispute</a>(transactionID, { ...params }) -> IssuingDispute</code>

## Receipt

Methods:

- <code title="get /transactions/{transactionId}/receipt">client.transactions.receipt.<a href="./src/resources/transactions/receipt.ts">retrieve</a>(transactionID) -> Response</code>
- <code title="put /transactions/{transactionId}/receipt">client.transactions.receipt.<a href="./src/resources/transactions/receipt.ts">upload</a>(transactionID, { ...params }) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserInitiatePaymentResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveBalancesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRetrieveContractsResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> IssuingUser</code>
- <code title="get /users/{userId}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userID) -> IssuingUser</code>
- <code title="patch /users/{userId}">client.users.<a href="./src/resources/users/users.ts">update</a>(userID, { ...params }) -> IssuingUser</code>
- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{userId}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userID) -> void</code>
- <code title="post /users/{userId}/cards">client.users.<a href="./src/resources/users/users.ts">createCard</a>(userID, { ...params }) -> IssuingCard</code>
- <code title="post /users/{userId}/charges">client.users.<a href="./src/resources/users/users.ts">createCharge</a>(userID, { ...params }) -> IssuingChargeCreateResponse</code>
- <code title="post /users/{userId}/payments">client.users.<a href="./src/resources/users/users.ts">initiatePayment</a>(userID, { ...params }) -> UserInitiatePaymentResponse</code>
- <code title="get /users/{userId}/balances">client.users.<a href="./src/resources/users/users.ts">retrieveBalances</a>(userID) -> UserRetrieveBalancesResponse</code>
- <code title="get /users/{userId}/contracts">client.users.<a href="./src/resources/users/users.ts">retrieveContracts</a>(userID) -> UserRetrieveContractsResponse</code>

## Signatures

Methods:

- <code title="get /users/{userId}/signatures/payments">client.users.signatures.<a href="./src/resources/users/signatures.ts">retrievePaymentSignature</a>(userID, { ...params }) -> IssuingSignature</code>
- <code title="get /users/{userId}/signatures/withdrawals">client.users.signatures.<a href="./src/resources/users/signatures.ts">retrieveWithdrawalSignature</a>(userID, { ...params }) -> IssuingSignature</code>
