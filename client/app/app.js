import angular from 'angular';
import vetshack_dependencies from './app.dependencies';
import vetshack_config from './app.config';
import vetshack_run from './app.run';
import vetshack_shared from '../shared/shared.module';
import vetshack_home from '../pages/vetshack.home/home.module';
import vetshack_auth from '../pages/vetshack.auth/auth.module';
import vetshack_mentors from '../pages/vetshack.mentors/mentors.module';
import vetshack_mentorProfile from '../pages/vetshack.mentorProfile/mentorProfile.module';
import vetshack_jobs from '../pages/vetshack.jobs/jobs.module';
import vetshack_events from '../pages/vetshack.events/events.module';
import vetshack_sos from '../pages/vetshack.sos/sos.module';
import vetshack_discounts from '../pages/vetshack.discounts/discounts.module';
import vetshack_jobsPost from '../pages/vetshack.jobsPost/jobsPost.module';

angular
  .module('vetshack', [
    vetshack_dependencies.name,
    vetshack_config.name,
    vetshack_run.name,
    vetshack_shared.name,
    vetshack_home.name,
    vetshack_auth.name,
    vetshack_mentors.name,
    vetshack_mentorProfile.name,
    vetshack_jobs.name,
    vetshack_events.name,
    vetshack_sos.name,
    vetshack_discounts.name,
    vetshack_jobsPost.name
  ]);
