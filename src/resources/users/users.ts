// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserAPI from '../applications/user';
import * as CardsAPI from '../cards/cards';
import * as CompaniesAPI from '../companies/companies';
import * as SignaturesAPI from './signatures';
import {
  SignatureRetrievePaymentSignatureParams,
  SignatureRetrieveWithdrawalSignatureParams,
  Signatures,
} from './signatures';
import * as CompanyAPI from '../applications/company/company';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  signatures: SignaturesAPI.Signatures = new SignaturesAPI.Signatures(this._client);

  /**
   * This endpoint allows the creation of a new authorized user with the necessary
   * personal details, including contact and wallet information.
   *
   * @example
   * ```ts
   * const issuingUser = await client.users.create({
   *   email: 'email',
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserAPI.IssuingUser> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * This endpoint retrieves a specific user by their unique ID. The user details,
   * including contact and wallet information, are returned.
   *
   * @example
   * ```ts
   * const issuingUser = await client.users.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserAPI.IssuingUser> {
    return this._client.get(path`/users/${userID}`, options);
  }

  /**
   * This endpoint allows the update of a specific user's information, such as their
   * name, email, and contact details.
   *
   * @example
   * ```ts
   * const issuingUser = await client.users.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    userID: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserAPI.IssuingUser> {
    return this._client.patch(path`/users/${userID}`, { body, ...options });
  }

  /**
   * This endpoint retrieves all users associated with a specific company. The
   * response will return a list of users, including their personal and contact
   * details.
   *
   * @example
   * ```ts
   * const issuingUsers = await client.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * This endpoint deletes a user by their unique ID. Once deleted, the user will no
   * longer have access to the system.
   *
   * @example
   * ```ts
   * await client.users.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint allows the creation of a card for a specific user. The card can
   * either be physical or virtual and can include various configuration options such
   * as the display name and limit.
   *
   * @example
   * ```ts
   * const issuingCard = await client.users.createCard(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { type: 'physical' },
   * );
   * ```
   */
  createCard(
    userID: string,
    body: UserCreateCardParams,
    options?: RequestOptions,
  ): APIPromise<CardsAPI.IssuingCard> {
    return this._client.post(path`/users/${userID}/cards`, { body, ...options });
  }

  /**
   * This endpoint allows creating a custom fee charge for a specific user. The fee
   * can be defined in the request body along with its details.
   *
   * @example
   * ```ts
   * const issuingChargeCreateResponse =
   *   await client.users.createCharge(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { amount: 1, description: 'description' },
   *   );
   * ```
   */
  createCharge(
    userID: string,
    body: UserCreateChargeParams,
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.IssuingChargeCreateResponse> {
    return this._client.post(path`/users/${userID}/charges`, { body, ...options });
  }

  /**
   * This endpoint allows initiating a payment for a specific user. The payment is
   * made from the user's wallet address to the specified recipient address.
   *
   * @example
   * ```ts
   * const response = await client.users.initiatePayment(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     amount: 0,
   *     walletAddress:
   *       '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
   *   },
   * );
   * ```
   */
  initiatePayment(
    userID: string,
    body: UserInitiatePaymentParams,
    options?: RequestOptions,
  ): APIPromise<UserInitiatePaymentResponse> {
    return this._client.post(path`/users/${userID}/payments`, { body, ...options });
  }

  /**
   * This endpoint retrieves the credit balances for a specific user. It provides
   * information about the user's credit limit, pending charges, posted charges,
   * balance due, and spending power.
   *
   * @example
   * ```ts
   * const response = await client.users.retrieveBalances(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieveBalances(userID: string, options?: RequestOptions): APIPromise<UserRetrieveBalancesResponse> {
    return this._client.get(path`/users/${userID}/balances`, options);
  }

  /**
   * This endpoint retrieves smart contract information for a specific user. It
   * returns a list of contracts associated with the user.
   *
   * @example
   * ```ts
   * const issuingContracts =
   *   await client.users.retrieveContracts(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveContracts(userID: string, options?: RequestOptions): APIPromise<UserRetrieveContractsResponse> {
    return this._client.get(path`/users/${userID}/contracts`, options);
  }
}

export type UserListResponse = Array<UserAPI.IssuingUser>;

export interface UserInitiatePaymentResponse {
  /**
   * The address to send the payment to
   */
  address: string;
}

export interface UserRetrieveBalancesResponse {
  /**
   * Balance due of the user, in cents
   */
  balanceDue: number;

  /**
   * Credit limit of the user, in cents
   */
  creditLimit: number;

  /**
   * Pending charges of the user, in cents
   */
  pendingCharges: number;

  /**
   * Posted charges of the user, in cents
   */
  postedCharges: number;

  /**
   * The amount of money the user can spend, in cents
   */
  spendingPower: number;
}

export type UserRetrieveContractsResponse = Array<CompaniesAPI.IssuingContract>;

export interface UserCreateParams {
  /**
   * The user's email address
   */
  email: string;

  /**
   * The user's first name
   */
  firstName: string;

  /**
   * The user's last name
   */
  lastName: string;

  /**
   * The user's address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * The user's phone country code
   */
  phoneCountryCode?: string;

  /**
   * The user's phone number
   */
  phoneNumber?: string;

  /**
   * The user's wallet address
   */
  walletAddress?: string;
}

export interface UserUpdateParams {
  /**
   * The user's address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * The user's email address
   */
  email?: string;

  /**
   * The user's first name
   */
  firstName?: string;

  /**
   * Indicates whether the user is active
   */
  isActive?: boolean;

  /**
   * Indicates whether the user has accepted the terms of service
   */
  isTermsOfServiceAccepted?: boolean;

  /**
   * The user's last name
   */
  lastName?: string;

  /**
   * The user's phone country code
   */
  phoneCountryCode?: string;

  /**
   * The user's phone number
   */
  phoneNumber?: string;
}

export interface UserListParams {
  /**
   * For corporate cards, the identifier of the company to get users for
   */
  companyId?: string;

  /**
   * The ID of the resource after which to start fetching
   */
  cursor?: string;

  /**
   * The number of resources to fetch
   */
  limit?: number;
}

export interface UserCreateCardParams {
  type: 'physical' | 'virtual';

  /**
   * The address that will serve as the billing address for the card. Defaults to the
   * shipping address or team address if not explicitly provided.
   */
  billing?: CompanyAPI.PhysicalAddress;

  /**
   * Configuration details for the card, including display name, product ID, and
   * virtual card art
   */
  configuration?: UserCreateCardParams.Configuration;

  /**
   * The initial credit limit for the card, expressed in cents
   */
  limit?: CardsAPI.IssuingCardLimit;

  /**
   * The address to ship the card, if it is a physical card
   */
  shipping?: UserCreateCardParams.Shipping;

  /**
   * The initial status of the card
   */
  status?: CardsAPI.IssuingCardStatus;
}

export namespace UserCreateCardParams {
  /**
   * Configuration details for the card, including display name, product ID, and
   * virtual card art
   */
  export interface Configuration {
    /**
     * The name to display on the card. If omitted, it will be the user's full name
     * trimmed to 30 characters.
     */
    displayName?: string;

    /**
     * The product ID to use for the card, denoting its BIN range. Only relevant if
     * custom product IDs or product references are part of the user's contract.
     */
    productId?: string;

    /**
     * The product reference to use for the card, denoting its appearance. Only
     * relevant if custom product IDs or product references are part of the user's
     * contract.
     */
    productRef?: string;

    /**
     * The virtual card art ID to use for the card, denoting its virtual appearance.
     * Only relevant if custom virtual card art IDs are part of the user's contract.
     */
    virtualCardArt?: string;
  }

  /**
   * The address to ship the card, if it is a physical card
   */
  export interface Shipping extends CompanyAPI.PhysicalAddress {
    /**
     * The phone number to use for shipping, if it is a physical card
     */
    phoneNumber: string;

    /**
     * The shipping method to use for the card. Standard and express are for US
     * addresses, while international is for non-US addresses.
     */
    method?: 'standard' | 'express' | 'international';
  }
}

export interface UserCreateChargeParams {
  /**
   * The amount of the charge, in cents
   */
  amount: number;

  /**
   * The description of the charge
   */
  description: string;
}

export interface UserInitiatePaymentParams {
  /**
   * The amount of the payment, in cents
   */
  amount: number;

  /**
   * The wallet address the payment is being sent from
   */
  walletAddress: string;

  /**
   * The chain ID (base-10 number) that the payment transaction is on
   */
  chainId?: number;
}

Users.Signatures = Signatures;

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserInitiatePaymentResponse as UserInitiatePaymentResponse,
    type UserRetrieveBalancesResponse as UserRetrieveBalancesResponse,
    type UserRetrieveContractsResponse as UserRetrieveContractsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCreateCardParams as UserCreateCardParams,
    type UserCreateChargeParams as UserCreateChargeParams,
    type UserInitiatePaymentParams as UserInitiatePaymentParams,
  };

  export {
    Signatures as Signatures,
    type SignatureRetrievePaymentSignatureParams as SignatureRetrievePaymentSignatureParams,
    type SignatureRetrieveWithdrawalSignatureParams as SignatureRetrieveWithdrawalSignatureParams,
  };
}
