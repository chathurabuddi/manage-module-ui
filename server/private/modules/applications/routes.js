const ApplicationService = require('./application_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/applications/search',
        handler: ApplicationService.searchApplicationsForApproval,
    },
    {
        method: 'POST',
        path: '/api/applications/statistics',
        handler: ApplicationService.getApplicationStatistics
    },
    {
        method: 'POST',
        path: '/api/applications/assign',
        handler: ApplicationService.assignApplicationTaskToUser
    },
    {
        method: 'POST',
        path: '/api/applications/approve/creation',
        handler: ApplicationService.approveApplicationCreation
    }

];