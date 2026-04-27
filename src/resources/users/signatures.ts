// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SignaturesAPI from '../companies/signatures';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Signatures extends APIResource {
  /**
   * This endpoint retrieves the payment signature for a specific user. The signature
   * is used to authorize a payment transaction for the user.
   *
   * @example
   * ```ts
   * const issuingSignature =
   *   await client.users.signatures.retrievePaymentSignature(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       token: 'token',
   *       adminAddress: 'adminAddress',
   *       amount: 'amount',
   *     },
   *   );
   * ```
   */
  retrievePaymentSignature(
    userID: string,
    query: SignatureRetrievePaymentSignatureParams,
    options?: RequestOptions,
  ): APIPromise<SignaturesAPI.IssuingSignature> {
    return this._client.get(path`/users/${userID}/signatures/payments`, { query, ...options });
  }

  /**
   * This endpoint retrieves the withdrawal signature for a specific user. The
   * signature is required to authorize a withdrawal transaction for the user.
   *
   * @example
   * ```ts
   * const issuingSignature =
   *   await client.users.signatures.retrieveWithdrawalSignature(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       token: 'token',
   *       adminAddress: 'adminAddress',
   *       amount: 'amount',
   *       recipientAddress: 'recipientAddress',
   *     },
   *   );
   * ```
   */
  retrieveWithdrawalSignature(
    userID: string,
    query: SignatureRetrieveWithdrawalSignatureParams,
    options?: RequestOptions,
  ): APIPromise<SignaturesAPI.IssuingSignature> {
    return this._client.get(path`/users/${userID}/signatures/withdrawals`, { query, ...options });
  }
}

export interface SignatureRetrievePaymentSignatureParams {
  /**
   * The address of the token that the payment should be made in, as a hex string for
   * EVM or base58 string for Solana
   */
  token: string;

  /**
   * The address of the admin making the payment, as a hex string for EVM or base58
   * string for Solana
   */
  adminAddress: string;

  /**
   * The amount of token that is being paid
   */
  amount: string;

  /**
   * The chain ID (base-10 number) that the smart contract is deployed on
   */
  chainId?: number;
}

export interface SignatureRetrieveWithdrawalSignatureParams {
  /**
   * The address of the token that the withdrawal should be made in, as a hex string
   * for EVM or base58 string for Solana
   */
  token: string;

  /**
   * The address of the admin making the payment, as a hex string for EVM or base58
   * string for Solana
   */
  adminAddress: string;

  /**
   * The amount of token that is being withdrawn
   */
  amount: string;

  /**
   * The address the withdrawal should be sent to, as a hex string for EVM or base58
   * string for Solana
   */
  recipientAddress: string;

  /**
   * The chain ID (base-10 number) that the smart contract is deployed on
   */
  chainId?: number;
}

export declare namespace Signatures {
  export {
    type SignatureRetrievePaymentSignatureParams as SignatureRetrievePaymentSignatureParams,
    type SignatureRetrieveWithdrawalSignatureParams as SignatureRetrieveWithdrawalSignatureParams,
  };
}
