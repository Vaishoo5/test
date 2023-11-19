using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace VueData_MeetingRoomBookings
{
    public partial class Form1 : Form
    {
        IMongoCollection<Booking> bookingCollection;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load_1(object sender, EventArgs e)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DatabaseConnection"].ConnectionString;
            var databaseName = MongoUrl.Create(connectionString).DatabaseName;
            var mongoClient = new MongoClient(connectionString);
            var database = mongoClient.GetDatabase(databaseName);
            bookingCollection = database.GetCollection<Booking>("bookingCollection");

            LoadDBData();
        }


        private void button1_Click(object sender, EventArgs e)
        {
            var add = new Booking
            {
                EmployeeID = textBox3.Text,
                EmployeeName = textBox1.Text,
                MeetingRoom = comboBox1.Text,
                MeetingDate = dateTimePicker1.Text,
                MeetingStartTime = comboBox4.Text,
                MeetingEndTime = comboBox5.Text,
                
            };
            bookingCollection.InsertOne(add);
            LoadDBData();
        }

        private void LoadDBData()
        {
            var todisplayMeetingRooms = Builders<Booking>.Filter.Empty;
            var displayMeetingRooms = bookingCollection.Find(todisplayMeetingRooms).ToList();
            dataGridView1.DataSource = displayMeetingRooms;
            
        }

        private void button2_Click(object sender, EventArgs e)
        {
            var filterBookings = Builders<Booking>.Filter.Eq(a => a.EmployeeName, textBox1.Text);
            var updatedBookings = Builders<Booking>.Update

                .Set(a => a.EmployeeID, textBox3.Text)
                .Set(a => a.EmployeeName, textBox1.Text)
                .Set(a => a.MeetingRoom, comboBox1.Text)
                .Set(a => a.MeetingDate, dateTimePicker1.Text)
                .Set(a => a.MeetingStartTime, comboBox4.Text)
                .Set(a => a.MeetingEndTime, comboBox5.Text);

            bookingCollection.UpdateOne(filterBookings, updatedBookings);

            LoadDBData();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            var deleteBooking = Builders<Booking>.Filter.Eq(a => a.EmployeeName, textBox1.Text);
            bookingCollection.DeleteOne(deleteBooking);

            LoadDBData();   
        }
    }
}
