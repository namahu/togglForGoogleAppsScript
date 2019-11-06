const getToggl = (apiToken: string) => {
    return new Toggl_(apiToken);
};

interface TimeEntries {
    id?: number;
    description: string;
    wid?: number;
    pid?: number;
    tid?: number;
    billable?: boolean;
    start: string;
    stop?: string;
    duration: number;
    created_with: string;
    tags?: string[];
    duronly?: boolean;
    at?: string;
};

interface ResponseTimeEntries {
    data: TimeEntries;
}

class Toggl_ {

    private apiToken: string;

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    private getTimeEntryId_(obj: ResponseTimeEntries) {
        return obj.data.id;

    }

    private getRunningTimeEntry_(req): ResponseTimeEntries {
        return req.get(`time_entries/current`);
    }

    startTimeEntry = (obj: TimeEntries) => {
        const req = new TogglRequest_(this.apiToken);
        return req.post('time_entries/start', obj);
    }

    stopTimeEntry = () => {
        const req = new TogglRequest_(this.apiToken);
        const runningTimeEntry = this.getRunningTimeEntry_(req);
        const timeEntryId: number = this.getTimeEntryId_(runningTimeEntry);
        return req.put(`time_entries/${timeEntryId}/stop`);

    }

    getRunningTimeEntry = () => {
        const req = new TogglRequest_(this.apiToken);
        return this.getRunningTimeEntry_(req);
    }

    getAllWorkspaces = () => {
        const path: string =  'workspaces';
        const req = new TogglRequest_(this.apiToken);
        return getAllWorkspaces_(path, req);
    }

    getCurrentUser = () => {
        const req = new TogglRequest_(this.apiToken);
        return getCurrentUser_(req);
    }

    getCurrentUserWithRelatedData = () => {
        const withRelatedData: boolean = true;
        const req = new TogglRequest_(this.apiToken);
        return getCurrentUser_(req, withRelatedData);
    };

};
