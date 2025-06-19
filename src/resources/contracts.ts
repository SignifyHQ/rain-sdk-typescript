// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CompaniesAPI from './companies/companies';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Contracts extends APIResource {
  /**
   * Retrieve the smart contract information for a specific authorized user tenant.
   */
  list(options?: RequestOptions): APIPromise<ContractListResponse> {
    return this._client.get('/contracts', options);
  }
}

export type ContractListResponse = Array<CompaniesAPI.IssuingContract>;

export declare namespace Contracts {
  export { type ContractListResponse as ContractListResponse };
}
