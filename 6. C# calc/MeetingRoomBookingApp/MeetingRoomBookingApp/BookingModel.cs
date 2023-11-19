using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeetingRoomBookingApp
{
    public class BookingModel
    {
        [BsonId, BsonElement("_id"),BsonRepresentation(BsonType.ObjectId)]
        public string MeetingID { get; set; }

        [BsonId, BsonElement("employee_name"), BsonRepresentation(BsonType.String)]
        public string EmployeeName { get; set; }

        [BsonId, BsonElement("meeting_room"), BsonRepresentation(BsonType.String)]
        public string MeetingRoom { get; set; }

        [BsonId, BsonElement("date"), BsonRepresentation(BsonType.String)]
        public string Date { get; set; }

        [BsonId, BsonElement("start_time"), BsonRepresentation(BsonType.String)]
        public string Start_Time { get; set; }

        [BsonId, BsonElement("end_time"), BsonRepresentation(BsonType.String)]
        public string End_Time { get; set; }
    }
}
