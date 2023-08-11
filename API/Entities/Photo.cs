using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{   
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; } // sua lai theo video (truoc day la id va trong bang cung la id)
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicID { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}