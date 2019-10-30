type method = 'get' | 'post' | 'put'
interface RequestOptions {
    method?: method;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    }
    payload?: any;
    muteHttpExceptions: boolean;
}

/**
 * Class that summarizes request processing to Toggl
 *
 * @constructor
 * @param apiToken - Toggl API token
 */
class TogglRequest_ {
    private apiToken: string;
    private options: RequestOptions;

    constructor(apiToken: string) {
        this.apiToken = Utilities.base64Encode(`${apiToken}:api_token`);
        this.options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.apiToken}`
            },
            muteHttpExceptions: true
        }
    }

    private baseURL: string = 'https://www.toggl.com/api/v8/';

    private fetchToggl(path: string, options: RequestOptions): any {
        const url: string = `${this.baseURL}${path}`;
        const res: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, options);
        const resObj: any = JSON.parse(res.getContentText());

        if (resObj.error) {
            throw new Error(resObj.error.message);
        }

        return resObj;
    }

    /**
     * get request　to toggl
     *
     * @param path - request path
     * @returns - toggl object
     */
    get(path: string) {
        this.options.method = 'get';
        return this.fetchToggl(path, this.options);
    }

    /**
     * post request to toggl
     *
     * @param path - request path
     * @param payload - Payload to post to Toggl
     */
    post(path: string, payload: object) {
        this.options.method = 'post';

        if (payload) {
            this.options.payload = JSON.stringify({time_entry: payload});
        }
        return this.fetchToggl(path, this.options);
    }

    put(path: string) {
        this.options.method = 'put';
        return this.fetchToggl(path, this.options);
    }
}
