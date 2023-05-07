/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `ai_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `paint_id` varchar(255) NOT NULL COMMENT '前端轮训用的id',
  `file` longblob COMMENT '图片二进制',
  `user_id` int(11) NOT NULL COMMENT 'USER key',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1代表记录有效，0代表记录无效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

INSERT INTO `ai_file` (`id`, `paint_id`, `file`, `user_id`, `create_time`, `update_time`, `status`) VALUES
(1, '1', NULL, 1, '2023-05-05 19:25:30', '2023-05-06 17:33:16', 1);
INSERT INTO `ai_file` (`id`, `paint_id`, `file`, `user_id`, `create_time`, `update_time`, `status`) VALUES
(2, '2_136', X'89504E470D0A1A0A0000000D494844520000003000000010080600000127A9CC270000000467414D410000B18F0BFC610500000038655849664D4D002A00000008000187690004000000010000001A000000000002A00200040000000100000030A0030004000000010000001000000000393E6132000003E749444154480DD556CB4E145110ADDBDDC444F1B1910D4B15178C915F8044057F81181850E307281F31BA37D1C044E51BE495C83790CC2C7C6C3511363ED0C44C779775AAFBCC34E3CCC48D0B6FC254DF7BEA5D75EB22326A4DD5F714F8EAF31F4ECFCDBF703A4A6608465553F5DD5655A5A9F63D551B6D45850E6D17344C973ACBBD0CDB976C7F41C2E5FAEB8BE08B24D97FD7BC59AB6F7C2FF659B4BF7EEF4C6D7C61A3D86BBCFF6D7BA9167D68DE3E027396EA1C049B2B678F22631E4B73DF1F6FAD1C45C69CE7C1F7C2402FDDD999803506FAE0E9F7095843A050347EF3E504AD99D09ED235805850747579AF816F1482AE628F05C5779FFF741C59EC2A2B6081A1F3F32F1AA1DC0B0C44327628A26D95A0EF9B37AE110385010BCD7041C6D5F2710287010BD5F11044BF6E2D395E96AD482A94235766B5D61F11F206E565EEBAC9B7335FC8A37DB4914B55E916C3C1ABF5BDC7055BEF1706A656B6AFE364F5D9CF3F7044B4B27EECB8A5E20F1C115DB8F5CAF19ED67FF105EFD919D4EFDEF3A699F7EC14E2F01E85C71EDEB37388C37B141EFBE86DF3C6237CD008DA0FC5CEA53381F3F5FBA71DA711B4238A9DC7B9E35FB7971CA711B4278A9D87CCF16E17D180489886725C1018E0A201DB4F43392E0C31501A70DC94E302E13CC10F16BA274EA2CFE8A47EE5C0D13D1DC7A5DDAF1C38BA278AD4E4A54DE538F736455AA09C69E945031611A405CA99964A348E7B5A4C39D35289467CB830E7F49C06386C98737A4E031C3ECC393DA7011F464193C9FE9C437190B005F792344CF6E71C8A454B3C185EC93964A0D88AEBF25EE42BCBBB3351088B99741A8C028C83165A3896B1350DD9E6BB8DF903F0DC7B763C934BB498275983510E92C5998F9C345ED338DFDC581D77F90BB79B339A478B59C81ACCC230795C8158E3B5A0D1E6979D3B075E630DE947155D402990FEFE310465C5DDDBB52767EC10BCB9E69F68244DF4A38DC705940AE58193C448CBBBD9020F7835684F5ED5ECCB024A89F2C149CA919677B7051EF0A651C7E5BBD70C8C70126F0FAE1A6E432EE9ACA6718893F0A67A36AC4A9EDD62E69ABCCDD5389F3DF54B8235B8C9FB73EA67C3AA0427CD41B35FF2866C56B224D8EDEAC9DB59B54A270230415F2703B150445A2A9DB9618E538EB42F101CB72C98B9618E538EB42F10B1D7AB95493657759CBCDDD78C07C5242DAA00C751098BB286CA0C6A2DCA9196939659C4E3DFB6BF9AB5CEFEA0D6A21C6939895D1E8E431EAF232A33A8B5BA152866DDE0561985D170390B7BA5B6F661C64761942F67654FBED22AA3300F000FA665FB21FB7E58AB540331C1277C07FDDF81A0265FF43D1DA773A42702D1F084EF241EDCC2BEC9571CA71C693510D8E73B4AFCBFA4BF015D498300B9FFADD80000000049454E44AE426082', 1, '2023-05-06 12:35:46', '2023-05-06 17:37:38', 1);
INSERT INTO `ai_file` (`id`, `paint_id`, `file`, `user_id`, `create_time`, `update_time`, `status`) VALUES
(3, '1_137', X'89504E470D0A1A0A0000000D494844520000003000000010080600000127A9CC270000000467414D410000B18F0BFC610500000038655849664D4D002A00000008000187690004000000010000001A000000000002A00200040000000100000030A0030004000000010000001000000000393E6132000003E749444154480DD556CB4E145110ADDBDDC444F1B1910D4B15178C915F8044057F81181850E307281F31BA37D1C044E51BE495C83790CC2C7C6C3511363ED0C44C779775AAFBCC34E3CCC48D0B6FC254DF7BEA5D75EB22326A4DD5F714F8EAF31F4ECFCDBF703A4A6608465553F5DD5655A5A9F63D551B6D45850E6D17344C973ACBBD0CDB976C7F41C2E5FAEB8BE08B24D97FD7BC59AB6F7C2FF659B4BF7EEF4C6D7C61A3D86BBCFF6D7BA9167D68DE3E027396EA1C049B2B678F22631E4B73DF1F6FAD1C45C69CE7C1F7C2402FDDD999803506FAE0E9F7095843A050347EF3E504AD99D09ED235805850747579AF816F1482AE628F05C5779FFF741C59EC2A2B6081A1F3F32F1AA1DC0B0C44327628A26D95A0EF9B37AE110385010BCD7041C6D5F2710287010BD5F11044BF6E2D395E96AD482A94235766B5D61F11F206E565EEBAC9B7335FC8A37DB4914B55E916C3C1ABF5BDC7055BEF1706A656B6AFE364F5D9CF3F7044B4B27EECB8A5E20F1C115DB8F5CAF19ED67FF105EFD919D4EFDEF3A699F7EC14E2F01E85C71EDEB37388C37B141EFBE86DF3C6237CD008DA0FC5CEA53381F3F5FBA71DA711B4238A9DC7B9E35FB7971CA711B4278A9D87CCF16E17D180489886725C1018E0A201DB4F43392E0C31501A70DC94E302E13CC10F16BA274EA2CFE8A47EE5C0D13D1DC7A5DDAF1C38BA278AD4E4A54DE538F736455AA09C69E945031611A405CA99964A348E7B5A4C39D35289467CB830E7F49C06386C98737A4E031C3ECC393DA7011F464193C9FE9C437190B005F792344CF6E71C8A454B3C185EC93964A0D88AEBF25EE42BCBBB3351088B99741A8C028C83165A3896B1350DD9E6BB8DF903F0DC7B763C934BB498275983510E92C5998F9C345ED338DFDC581D77F90BB79B339A478B59C81ACCC230795C8158E3B5A0D1E6979D3B075E630DE947155D402990FEFE310465C5DDDBB52767EC10BCB9E69F68244DF4A38DC705940AE58193C448CBBBD9020F7835684F5ED5ECCB024A89F2C149CA919677B7051EF0A651C7E5BBD70C8C70126F0FAE1A6E432EE9ACA6718893F0A67A36AC4A9EDD62E69ABCCDD5389F3DF54B8235B8C9FB73EA67C3AA0427CD41B35FF2866C56B224D8EDEAC9DB59B54A270230415F2703B150445A2A9DB9618E538EB42F101CB72C98B9618E538EB42F10B1D7AB95493657759CBCDDD78C07C5242DAA00C751098BB286CA0C6A2DCA9196939659C4E3DFB6BF9AB5CEFEA0D6A21C6939895D1E8E431EAF232A33A8B5BA152866DDE0561985D170390B7BA5B6F661C64761942F67654FBED22AA3300F000FA665FB21FB7E58AB540331C1277C07FDDF81A0265FF43D1DA773A42702D1F084EF241EDCC2BEC9571CA71C693510D8E73B4AFCBFA4BF015D498300B9FFADD80000000049454E44AE426082', 1, '2023-05-06 17:45:55', '2023-05-06 17:45:54', 1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
