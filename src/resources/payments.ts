// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * This endpoint initiates a payment for an authorized user tenant. The request
   * includes the amount to be transferred and the wallet address to send the payment
   * from.
   */
  initiate(body: PaymentInitiateParams, options?: RequestOptions): APIPromise<PaymentInitiateResponse> {
    return this._client.post('/payments', { body, ...options });
  }
}

export interface PaymentInitiateResponse {
  /**
   * The address to send the payment to
   */
  address: string;
}

export interface PaymentInitiateParams {
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

export declare namespace Payments {
  export {
    type PaymentInitiateResponse as PaymentInitiateResponse,
    type PaymentInitiateParams as PaymentInitiateParams,
  };
}
