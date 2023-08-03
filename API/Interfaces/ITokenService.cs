using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(AppUser user); // nhận người dùng như là tham số đầu vào
    }
}