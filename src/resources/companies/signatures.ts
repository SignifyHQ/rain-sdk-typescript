// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Signatures extends APIResource {
  /**
   * Retrieve the payment signature for a company, which is required for completing
   * payment transactions.
   */
  retrievePaymentSignature(
    companyID: string,
    query: SignatureRetrievePaymentSignatureParams,
    options?: RequestOptions,
  ): APIPromise<IssuingSignature> {
    return this._client.get(path`/companies/${companyID}/signatures/payments`, { query, ...options });
  }

  /**
   * Retrieve the withdrawal signature for a company, which is required for
   * processing withdrawal requests.
   */
  retrieveWithdrawalSignature(
    companyID: string,
    query: SignatureRetrieveWithdrawalSignatureParams,
    options?: RequestOptions,
  ): APIPromise<IssuingSignature> {
    return this._client.get(path`/companies/${companyID}/signatures/withdrawals`, { query, ...options });
  }
}

/**
 * Indicates the signature is pending and provides the time after which a retry is
 * possible.
 */
export type IssuingSignature = IssuingSignature.IfSignatureIsPending | IssuingSignature.IfSignatureIsReady;

export namespace IssuingSignature {
  /**
   * Indicates the signature is pending and provides the time after which a retry is
   * possible.
   */
  export interface IfSignatureIsPending {
    /**
     * The number of seconds after which the signature can be retried
     */
    retryAfter: number;

    /**
     * The status of the signature
     */
    status: 'pending';
  }

  /**
   * Indicates that the signature is ready and includes the signature data and
   * expiration time.
   */
  export interface IfSignatureIsReady {
    signature: IfSignatureIsReady.Signature;

    /**
     * The status of the signature
     */
    status: 'ready';

    /**
     * The time at which the signature will expire
     */
    expiresAt?: string;
  }

  export namespace IfSignatureIsReady {
    export interface Signature {
      /**
       * The actual signature data
       */
      data: string;

      /**
       * The salt used to generate the signature
       */
      salt: string;
    }
  }
}

export interface SignatureRetrievePaymentSignatureParams {
  /**
   * The address of the token that the payment should be made in (as a hex string for
   * EVM or base58 string for Solana)
   */
  token: string;

  /**
   * The address of the admin making the payment, as a hex string for EVM or base58
   * string for Solana
   */
  adminAddress: string;

  /**
   * The amount of tokens that are being paid
   */
  amount: string;

  /**
   * The chain ID (base-10 number) that the smart contract is deployed on
   */
  chainId?: number;

  /**
   * Indicates whether the amount is in the asset's native units. If false, the
   * amount is expressed in cents.
   */
  isAmountNative?: boolean;
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
   * The amount of tokens being withdrawn
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

  /**
   * Indicates whether the amount is in the asset's native units. If false, the
   * amount is expressed in cents.
   */
  isAmountNative?: boolean;
}

export declare namespace Signatures {
  export {
    type IssuingSignature as IssuingSignature,
    type SignatureRetrievePaymentSignatureParams as SignatureRetrievePaymentSignatureParams,
    type SignatureRetrieveWithdrawalSignatureParams as SignatureRetrieveWithdrawalSignatureParams,
  };
}
