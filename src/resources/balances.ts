// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Balances extends APIResource {
  /**
   * Retrieves the credit balances for an authorized user tenant. This includes
   * details such as credit limit, pending charges, posted charges, balance due, and
   * spending power.
   */
  retrieve(options?: RequestOptions): APIPromise<BalanceRetrieveResponse> {
    return this._client.get('/balances', options);
  }
}

export interface BalanceRetrieveResponse {
  /**
   * Balance due of the company, in cents
   */
  balanceDue: number;

  /**
   * Credit limit of the company, in cents
   */
  creditLimit: number;

  /**
   * Pending charges of the company, in cents
   */
  pendingCharges: number;

  /**
   * Posted charges of the company, in cents
   */
  postedCharges: number;

  /**
   * The amount of money the company can spend, in cents
   */
  spendingPower: number;
}

export declare namespace Balances {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
