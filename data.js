(function () {
    "use strict";

    const records = {
        scholars: [],
        sponsors: [],
        volunteers: [],
        events: [],
        team: [],
        articles: [],
        stories: []
    };

    window.SITE_DATA = Object.freeze({
        demoMode: true,
        organizationName: "Из Калтыр",
        records: Object.freeze(records),
        statistics() {
            const records = this.records;
            return {
                scholars: records.scholars.filter((record) => record.published && !record.deleted).length,
                sponsors: records.sponsors.filter((record) => record.visible && !record.deleted).length,
                volunteers: records.volunteers.filter((record) => record.active && !record.deleted).length,
                events: records.events.filter((record) => record.published && !record.deleted).length
            };
        },
        scholarship: Object.freeze({
            status: "unconfirmed",
            deadline: null,
            applicationUrl: null
        })
    });
}());
