import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
  "id" : 1,
  "name" : "Scafell Pike to Grasmere",
  "date" : new Date('06/01/2017'),
  "distance" : 16.2,
  "comments" : "Lots of Undulation, great views",
  "gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'Buttermere to Borrowdale',
   "date": new Date('06/04/2017'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 11,
   "comments": 'Very treacherous terrain'
 },
 {
   "id": 3,
   "name": 'St Bees to Eskdale',
   "date": new Date('06/05/2017'),
   "gpxData": '../../assets/gpx/3.gpx',
   "distance": 22,
   "comments": 'Flat, love it'
 },
 {
   "id": 4,
   "name": 'Ullswater Lap',
   "date": new Date('06/08/2017'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 8.4,
   "comments": 'Cool and windy by the lake.'
 }
]
