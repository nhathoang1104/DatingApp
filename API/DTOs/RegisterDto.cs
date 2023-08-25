using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required] public string KnownAs { get; set; }
        [Required] public string Gender { get; set; }
        [Required] public DateTime DateOfBirth { get; set; }
        [Required] public string Country { get; set; }
        [Required] public string City { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }

    //tại chap 12 khi mở rộng form register, cũng cần phải thêm 
    //số lượng các thuộc tính trong register dto để nhận thêm
    //các dữ liệu từ phía client
}