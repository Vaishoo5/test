using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VueData_MeetingRoomBookings
{
    public class Booking
    {
        [BsonId, BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string MeetingID { get; set; }

        [BsonElement("employee_id"), BsonRepresentation(BsonType.String)]
        public string EmployeeID { get; set; }

        [BsonElement("employee_name"), BsonRepresentation(BsonType.String)]
        public string EmployeeName { get; set; }

        [BsonElement("meeting_room"), BsonRepresentation(BsonType.String)]
        public string MeetingRoom { get; set; }

        [BsonElement("meeting_date"), BsonRepresentation(BsonType.String)]
        public string MeetingDate { get; set; }

        [BsonElement("meeting_start_time"), BsonRepresentation(BsonType.String)]
        public string MeetingStartTime { get; set; }

        [BsonElement("meeting_end_time"), BsonRepresentation(BsonType.String)]
        public string MeetingEndTime { get; set; }
    }
}
