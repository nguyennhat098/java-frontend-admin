USE [master]
GO
/****** Object:  Database [shopfashe]    Script Date: 7/6/2020 6:04:38 AM ******/
CREATE DATABASE [shopfashe]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'shopfashe', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\shopfashe.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'shopfashe_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\shopfashe_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [shopfashe] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [shopfashe].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [shopfashe] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [shopfashe] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [shopfashe] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [shopfashe] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [shopfashe] SET ARITHABORT OFF 
GO
ALTER DATABASE [shopfashe] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [shopfashe] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [shopfashe] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [shopfashe] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [shopfashe] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [shopfashe] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [shopfashe] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [shopfashe] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [shopfashe] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [shopfashe] SET  ENABLE_BROKER 
GO
ALTER DATABASE [shopfashe] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [shopfashe] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [shopfashe] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [shopfashe] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [shopfashe] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [shopfashe] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [shopfashe] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [shopfashe] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [shopfashe] SET  MULTI_USER 
GO
ALTER DATABASE [shopfashe] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [shopfashe] SET DB_CHAINING OFF 
GO
ALTER DATABASE [shopfashe] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [shopfashe] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [shopfashe] SET DELAYED_DURABILITY = DISABLED 
GO
USE [shopfashe]
GO
/****** Object:  User [nhat]    Script Date: 7/6/2020 6:04:38 AM ******/
CREATE USER [nhat] FOR LOGIN [nhat] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Actions]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ActionName] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.Actions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AnswerComments]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnswerComments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CommentId] [int] NOT NULL,
	[UserId] [int] NULL,
	[Content] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AnswerComments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AnswerReviews]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnswerReviews](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ReviewId] [int] NOT NULL,
	[UserId] [int] NULL,
	[Content] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AnswerReviews] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Categories]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[Status] [bit] NOT NULL,
	[CreatedDate] [datetime] NULL,
	[ModifileDate] [datetime] NULL,
	[Images] [nvarchar](500) NULL,
 CONSTRAINT [PK_dbo.Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Comments]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Question] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifyDate] [datetime] NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Comments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[hibernate_sequence]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hibernate_sequence](
	[next_val] [numeric](19, 0) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[MenuRole]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MenuRole](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MenuId] [int] NULL,
	[RoleId] [int] NULL,
	[ActionName] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Menus]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Text] [nvarchar](max) NULL,
	[DisplayOrder] [int] NOT NULL,
	[Link] [nvarchar](max) NULL,
	[Status] [bit] NOT NULL,
	[Class] [nvarchar](100) NULL,
	[ActionName] [nvarchar](100) NULL,
 CONSTRAINT [PK_dbo.Menus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Notifies]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notifies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Content] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifyDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Image] [nvarchar](max) NULL,
	[Link] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_dbo.Notifies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
	[Price] [real] NOT NULL,
	[Quantity] [float] NOT NULL,
 CONSTRAINT [PK_dbo.OrderDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Orders]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Created] [datetime] NULL,
	[Status] [int] NOT NULL,
	[Message] [nvarchar](max) NULL,
	[VerifyCode] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Products]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[Content] [nvarchar](max) NOT NULL,
	[Images] [nvarchar](max) NOT NULL,
	[Price] [float] NOT NULL,
	[Sale_Price] [float] NULL,
	[Category_ID] [int] NOT NULL,
	[MoreImages] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifileDate] [datetime] NULL,
	[Status] [bit] NOT NULL,
	[TopHot] [bit] NOT NULL,
	[Star1] [real] NOT NULL,
	[Star2] [real] NOT NULL,
	[Star3] [real] NOT NULL,
	[Star4] [real] NOT NULL,
	[Star5] [real] NOT NULL,
	[AverageStar] [real] NOT NULL,
 CONSTRAINT [PK_dbo.Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ReviewProducts]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReviewProducts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
	[Rate] [int] NOT NULL,
	[Content] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Status] [bit] NOT NULL,
	[Image] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.ReviewProducts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RoleActions]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleActions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[ActionId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.RoleActions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Roles]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[CreatedDate] [datetime] NULL,
	[EditedDate] [datetime] NULL,
	[FullName] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Status] [bit] NOT NULL,
	[RessetPasswordCode] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[Gender] [nvarchar](max) NULL,
	[KeyData] [nvarchar](255) NULL,
 CONSTRAINT [PK_dbo.Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[WishLists]    Script Date: 7/6/2020 6:04:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WishLists](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
 CONSTRAINT [PK_dbo.WishLists] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Actions] ON 

INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (1, N'VIEW CATEGORY', N'test')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (2, N'ADD CATEGORY', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (3, N'EDIT CATEGORY', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (4, N'DELETE CATEGORY', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (9, N'VIEW PRODUCT', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (10, N'ADD PRODUCT', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (11, N'EDIT PRODUCT', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (12, N'DELETE PRODUCT', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (13, N'VIEW ROLE', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (14, N'ADD ROLE', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (15, N'EDIT ROLE', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (16, N'DELETE ROLE', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (17, N'DELETE ROLE ACTIONS', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (18, N'ADD ROLE ACTIONS', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (23, N'VIEW USER', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (24, N'ADD USER', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (25, N'EDIT USER', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (26, N'DELETE USER', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (35, N'VIEW ORDERS', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (36, N'EDIT ORDERS', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (38, N'VIEW CHAT', NULL)
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (39, N'VIEW PERMISSION', NULL)
SET IDENTITY_INSERT [dbo].[Actions] OFF
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (7, N'Quần Áo Nam', N'quan-ao-nam', 1, CAST(N'2019-10-14 15:32:54.743' AS DateTime), CAST(N'2019-12-09 16:03:01.000' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (8, N'Áo Vest Nam', N'ao-vest-nam', 1, CAST(N'2019-10-14 15:33:10.897' AS DateTime), NULL, NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (10, N'Túi Sách Nữ', N'tui-sach-nu', 1, CAST(N'2019-10-14 15:41:03.457' AS DateTime), CAST(N'2019-10-14 15:42:27.987' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (11, N'Túi Sách Có Quai', N'tui-sach-co-quai', 1, CAST(N'2019-10-14 15:41:58.667' AS DateTime), CAST(N'2019-10-14 15:42:38.387' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (13, N'Quần áo nữ', N'quan-ao-nu', 1, CAST(N'2019-10-14 16:17:36.960' AS DateTime), NULL, NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (14, N'Váy nữ', N'vay-nu', 1, CAST(N'2019-10-14 16:19:29.400' AS DateTime), NULL, NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (15, N'quần jean nữ', N'quan-jean-nu', 1, CAST(N'2019-10-14 16:19:39.753' AS DateTime), CAST(N'2019-10-14 16:19:49.867' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (16, N'Quần short nữ', N'quan-short-nu', 1, CAST(N'2019-10-14 16:24:53.350' AS DateTime), NULL, NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (17, N'kính mắt', N'kinh-mat', 1, CAST(N'2019-10-14 16:26:50.880' AS DateTime), NULL, NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Status], [CreatedDate], [ModifileDate], [Images]) VALUES (18, N'kính mắt nữ', N'kkkk', 1, CAST(N'2019-10-14 16:27:07.073' AS DateTime), NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1593875090108?alt=media&token=c0c76c5e-44e7-4aed-bba2-10ba2f00393a')
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[Comments] ON 

INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (13, 1, 511, N'33333', CAST(N'2020-06-28 07:34:09.147' AS DateTime), CAST(N'2020-06-28 07:34:09.147' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Comments] OFF
INSERT [dbo].[hibernate_sequence] ([next_val]) VALUES (CAST(1 AS Numeric(19, 0)))
SET IDENTITY_INSERT [dbo].[MenuRole] ON 

INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (20, 3, 1, N'VIEW CATEGORY')
INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (21, 1, 1, N'VIEW PRODUCT')
INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (22, 2, 1, N'VIEW ROLE')
INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (24, 4, 1, N'VIEW USER')
INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (27, 6, 1, N'VIEW ORDERS')
INSERT [dbo].[MenuRole] ([Id], [MenuId], [RoleId], [ActionName]) VALUES (44, 9, 1, N'VIEW CHAT')
SET IDENTITY_INSERT [dbo].[MenuRole] OFF
SET IDENTITY_INSERT [dbo].[Menus] ON 

INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (1, N'Product Management', 1, N'/product', 1, N'nav-icon fas fa-tachometer-alt', N'VIEW PRODUCT')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (2, N'Role Management', 1, N'/role', 1, N'nav-icon fas fa-th', N'VIEW ROLE')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (3, N'Category Management', 1, N'/category', 1, N'nav-icon fas fa-copy', N'VIEW CATEGORY')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (4, N'User Management', 1, N'/user', 1, N'nav-icon fas fa-chart-pie', N'VIEW USER')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (5, N'Slider Management', 1, N'/slider', 1, N'nav-icon fas fa-tree', N'VIEW SLIDER')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (6, N'Oder Management', 1, N'/order', 1, N'nav-icon fas fa-edit', N'VIEW ORDERS')
INSERT [dbo].[Menus] ([Id], [Text], [DisplayOrder], [Link], [Status], [Class], [ActionName]) VALUES (9, N'Chat Management', 1, N'/chat', 1, N'nav-icon fas fa-table', N'VIEW CHAT')
SET IDENTITY_INSERT [dbo].[Menus] OFF
SET IDENTITY_INSERT [dbo].[Notifies] ON 

INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (1, 1, N'Đơn hàng mã số 14 đã được giao.Bạn có thể đánh giá về sản phẩm', CAST(N'2020-02-10 21:42:13.317' AS DateTime), NULL, NULL, N'/Contents/Uploads/files/b8.jpg', N'/Order/ReViewOrder/cfa6936d-6ced-4021-b35d-af3103d7152b', 1)
INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (2, 1, N'Đơn hàng mã số 15 đã được giao.Bạn có thể đánh giá về sản phẩm', CAST(N'2020-02-10 21:42:19.787' AS DateTime), NULL, NULL, N'/Contents/Uploads/files/b10.jpg', N'/Order/ReViewOrder/850098bc-3954-40fd-9484-a6228737b8ff', 1)
INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (3, 12, N'Orded', NULL, NULL, NULL, N'/Contents/Uploads/files/b1.jpg', N'GgPTODwoUcseYUz', 1)
INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (4, 12, N'Orded', NULL, NULL, NULL, N'/Contents/Uploads/files/b8.jpg', N'mEwsrMaRDhaEFGs', 1)
SET IDENTITY_INSERT [dbo].[Notifies] OFF
SET IDENTITY_INSERT [dbo].[OrderDetails] ON 

INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (29, 506, 43, 600000, 1)
SET IDENTITY_INSERT [dbo].[OrderDetails] OFF
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (13, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-05 16:27:49.000' AS DateTime), 3, NULL, N'')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (14, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-06 08:47:37.000' AS DateTime), 3, NULL, N'cfa6936d-6ced-4021-b35d-af3103d7152b')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (15, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-06 08:54:19.000' AS DateTime), 3, NULL, N'850098bc-3954-40fd-9484-a6228737b8ff')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (16, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-10 21:41:46.640' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (17, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:17:25.060' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (18, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:19:00.527' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (19, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:23:50.267' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (20, 1, N'3422442566', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:28:05.513' AS DateTime), 3, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (21, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-06-28 15:09:30.877' AS DateTime), 0, N'', NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (22, 1, N'3422442566', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-06-28 15:19:32.337' AS DateTime), 3, N'', NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (24, 1, N'3422442566', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-06-28 15:19:32.337' AS DateTime), 3, N'', NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (25, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-06-28 15:19:32.337' AS DateTime), 0, N'', NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (40, 12, N'5', N'nguyennhatt098@gmail.com', N'5', N'5', CAST(N'2020-07-02 23:04:50.623' AS DateTime), 3, N'', N'GgPTODwoUcseYUz')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (41, 12, N'4', N'nguyennhatt098@gmail.com', N'4', N'4', CAST(N'2020-07-02 23:06:55.640' AS DateTime), 3, N'', N'mEwsrMaRDhaEFGs')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (42, 16, N'Nhật Nguyễn', N'donking2510@gmail.com', N'3', N'3', CAST(N'2020-07-04 20:59:38.660' AS DateTime), 0, N'', NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (43, 12, N'nhật nguyễn', N'nguyennhatt098@gmail.com', N'3', N're', CAST(N'2020-07-04 22:15:09.420' AS DateTime), 0, N'', NULL)
SET IDENTITY_INSERT [dbo].[Orders] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (496, N'Áo Vest Nam 2', N'ao-vest-nam-2', N'Quần áo dành cho nam
', N'/Contents/Uploads/files/m9.jpg', 500000, 499999, 8, N'/Contents/Uploads/files/m3.jpg;/Contents/Uploads/files/m5.jpg;', CAST(N'2019-10-14 15:40:18.407' AS DateTime), CAST(N'2019-10-14 16:12:42.733' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (505, N'váy nữ 1', N'vay-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok6.jpg', 500000, NULL, 14, NULL, CAST(N'2019-10-14 16:21:15.147' AS DateTime), CAST(N'2019-12-15 19:03:31.097' AS DateTime), 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (506, N'váy nữ 2', N'vay-nu-2', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok29.jpg', 600000, NULL, 8, N'/Contents/Uploads/files/ok13.jpg;/Contents/Uploads/files/ok12.jpg;', CAST(N'2019-10-14 16:21:55.273' AS DateTime), CAST(N'2020-02-06 11:19:23.773' AS DateTime), 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (507, N'váy nữ 3', N'vay-nu-3', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok7.jpg', 1000000, NULL, 14, NULL, CAST(N'2019-10-14 16:22:58.803' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (508, N'váy nữ 4', N'vay-nu-4', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok10.jpg', 20000, NULL, 15, NULL, CAST(N'2019-10-14 16:23:38.067' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (509, N'Quần short nữ 1', N'quan-short-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok28.jpg', 500000, NULL, 16, NULL, CAST(N'2019-10-14 16:26:00.777' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (510, N'kính mắt nữ 1', N'kinh-mat-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/c15.jpg', 20000, NULL, 18, N'/Contents/Uploads/files/c10.jpg;/Contents/Uploads/files/c12.jpg;/Contents/Uploads/files/c13.jpg;', CAST(N'2019-10-14 16:28:48.317' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (511, N'kính mắt nữ 2', N'kinh-mat-nu-2', N'sản phẩm dành cho nữ', N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1591664048186?alt=media&token=bdb95e9a-17aa-4995-9e42-cd0d8984f70f', 10000, 200, 18, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1593875277325?alt=media&token=c797d567-ebab-4423-91f0-4fe4e77ee250,https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1593875277328?alt=media&token=86d3b598-78fb-41f6-a04c-e7b99aa395c0', CAST(N'2019-10-14 16:29:29.793' AS DateTime), CAST(N'2020-07-04 23:29:10.733' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[Products] OFF
SET IDENTITY_INSERT [dbo].[RoleActions] ON 

INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (96, 1, 1)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (97, 1, 2)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (98, 1, 3)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (99, 1, 4)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (100, 1, 9)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (102, 1, 11)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (103, 1, 12)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (104, 1, 13)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (105, 1, 14)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (106, 1, 15)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (107, 1, 16)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (108, 1, 17)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (109, 1, 18)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (114, 1, 23)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (115, 1, 24)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (116, 1, 25)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (117, 1, 26)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (126, 1, 35)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (127, 1, 36)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (146, 1, 10)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (147, 2, 1)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (148, 1, 38)
SET IDENTITY_INSERT [dbo].[RoleActions] OFF
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (1, N'admin', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (2, N'member', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (3, N'manager', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (4, N'member2', N'233aaâ')
SET IDENTITY_INSERT [dbo].[Roles] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (1, 1, N'admin', N'c4ca4238a0b92382dcc509a6f75849b', CAST(N'2019-09-20 21:02:41.477' AS DateTime), CAST(N'2019-12-15 19:05:40.967' AS DateTime), N'34', N'3422442566', N'ab83A8438@gmail.com', N'54545', 1, NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1592122871009?alt=media&token=48b621d8-420b-4e57-a2fb-c0218824877d', NULL, N'-MBU1DBJOFTysqmhotYZ')
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (8, 2, N'admin3', N'c4ca4238a0b92382dcc509a6f75849b', CAST(N'2019-09-21 07:32:45.920' AS DateTime), NULL, N'r', N'0967767190', N'1@gmail.com', N'54545', 1, NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1592126380719?alt=media&token=046dea5b-0530-4066-ae99-12c4e380b182', NULL, N'-MBT256kWwncJHaaCaGt')
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (10, 2, N'nguyennhat98', N'd9b1d7db4cd6e7935368a1efb10e377', CAST(N'2019-12-15 20:03:45.150' AS DateTime), NULL, N'nguyennhat98', N'0123843957', N'nguyennhat98@gmail.com', N'Ha Noi', 1, NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1592126371149?alt=media&token=5d5aad50-f2d0-4432-8fd5-091a22c9efb9', N'Nam', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (11, 3, N'Hangxinhdep', N'55e1bafe077ffbb67f4e32f29d751', CAST(N'2020-01-25 18:40:42.623' AS DateTime), NULL, N'Hằng cute', N'0985703182', N'Hoahauhang@gmail.com', N'Dinh thự của Hằng', 1, NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1592126362229?alt=media&token=4b6af191-cbc9-4e00-b68f-948913b49fb0', N'Nữ', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (12, 2, N'nhậtnguyễn', N'202cb962ac5975b964b7152d234b70', NULL, NULL, N'nhật nguyễn', N'', N'nguyennhatt098@gmail.com', N'', 0, NULL, N'https://lh3.googleusercontent.com/a-/AOh14Ggg4Ol0jTNuWdSy_2g7pSg3r8-2njDcj5ykl9P6UA=s96-c', NULL, N'-MBU1Gs7FDsWUZLKanLR')
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (13, 2, N'23', N'25d55ad283aa40af464c76d713c7ad', NULL, NULL, N'test', N'32', N'32@gmail.com', N'1243', 1, NULL, NULL, N'true', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (14, 2, N'3343', N'25d55ad283aa40af464c76d713c7ad', NULL, NULL, N'êrẻ', N'344343434', N'343@gmail.com', N'3434', 1, NULL, NULL, N'true', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (15, 2, N'34', N'25d55ad283aa40af464c76d713c7ad', NULL, NULL, N'3', N'34', N'34@gmail.com', N'3', 1, NULL, N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1593870740464?alt=media&token=13abe506-9139-4697-a5d5-b9742cb27a19', N'true', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender], [KeyData]) VALUES (16, 2, N'NhậtNguyễn', N'202cb962ac5975b964b7152d234b70', NULL, NULL, N'Nhật Nguyễn', N'', N'donking2510@gmail.com', N'', 0, NULL, N'https://graph.facebook.com/1311993965670407/picture?type=normal', NULL, N'-MBU1hJ7qkoDQwFnqOUk')
SET IDENTITY_INSERT [dbo].[Users] OFF
SET IDENTITY_INSERT [dbo].[WishLists] ON 

INSERT [dbo].[WishLists] ([Id], [UserID], [ProductID]) VALUES (14, 1, 511)
INSERT [dbo].[WishLists] ([Id], [UserID], [ProductID]) VALUES (43, 16, 509)
SET IDENTITY_INSERT [dbo].[WishLists] OFF
/****** Object:  Index [IX_CommentId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_CommentId] ON [dbo].[AnswerComments]
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AnswerComments]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ReviewId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ReviewId] ON [dbo].[AnswerReviews]
(
	[ReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AnswerReviews]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[Comments]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Comments]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Notifies]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_OrderId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_OrderId] ON [dbo].[OrderDetails]
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[OrderDetails]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Orders]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Category_ID]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_Category_ID] ON [dbo].[Products]
(
	[Category_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_OrderId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_OrderId] ON [dbo].[ReviewProducts]
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[ReviewProducts]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActionId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ActionId] ON [dbo].[RoleActions]
(
	[ActionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoleId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[RoleActions]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoleId]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[Users]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductID]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_ProductID] ON [dbo].[WishLists]
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserID]    Script Date: 7/6/2020 6:04:39 AM ******/
CREATE NONCLUSTERED INDEX [IX_UserID] ON [dbo].[WishLists]
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AnswerComments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AnswerComments_dbo.Comments_CommentId] FOREIGN KEY([CommentId])
REFERENCES [dbo].[Comments] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnswerComments] CHECK CONSTRAINT [FK_dbo.AnswerComments_dbo.Comments_CommentId]
GO
ALTER TABLE [dbo].[AnswerComments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AnswerComments_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[AnswerComments] CHECK CONSTRAINT [FK_dbo.AnswerComments_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[AnswerReviews]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AnswerReviews_dbo.ReviewProducts_ReviewId] FOREIGN KEY([ReviewId])
REFERENCES [dbo].[ReviewProducts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AnswerReviews] CHECK CONSTRAINT [FK_dbo.AnswerReviews_dbo.ReviewProducts_ReviewId]
GO
ALTER TABLE [dbo].[AnswerReviews]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AnswerReviews_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[AnswerReviews] CHECK CONSTRAINT [FK_dbo.AnswerReviews_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Comments_dbo.Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_dbo.Comments_dbo.Products_ProductId]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Comments_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_dbo.Comments_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[MenuRole]  WITH CHECK ADD FOREIGN KEY([MenuId])
REFERENCES [dbo].[Menus] ([Id])
GO
ALTER TABLE [dbo].[MenuRole]  WITH CHECK ADD FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
GO
ALTER TABLE [dbo].[Notifies]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Notifies_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Notifies] CHECK CONSTRAINT [FK_dbo.Notifies_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_dbo.OrderDetails_dbo.Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_dbo.OrderDetails_dbo.Orders_OrderId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_dbo.OrderDetails_dbo.Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_dbo.OrderDetails_dbo.Products_ProductId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Orders_dbo.Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_dbo.Orders_dbo.Users_UserId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Products_dbo.Categories_Category_ID] FOREIGN KEY([Category_ID])
REFERENCES [dbo].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_dbo.Products_dbo.Categories_Category_ID]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FKqrppqypa6xvkqt33rxogpc67] FOREIGN KEY([Category_ID])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FKqrppqypa6xvkqt33rxogpc67]
GO
ALTER TABLE [dbo].[ReviewProducts]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ReviewProducts_dbo.Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReviewProducts] CHECK CONSTRAINT [FK_dbo.ReviewProducts_dbo.Orders_OrderId]
GO
ALTER TABLE [dbo].[ReviewProducts]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ReviewProducts_dbo.Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReviewProducts] CHECK CONSTRAINT [FK_dbo.ReviewProducts_dbo.Products_ProductId]
GO
ALTER TABLE [dbo].[RoleActions]  WITH CHECK ADD  CONSTRAINT [FK_dbo.RoleActions_dbo.Actions_ActionId] FOREIGN KEY([ActionId])
REFERENCES [dbo].[Actions] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RoleActions] CHECK CONSTRAINT [FK_dbo.RoleActions_dbo.Actions_ActionId]
GO
ALTER TABLE [dbo].[RoleActions]  WITH CHECK ADD  CONSTRAINT [FK_dbo.RoleActions_dbo.Roles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RoleActions] CHECK CONSTRAINT [FK_dbo.RoleActions_dbo.Roles_RoleId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Users_dbo.Roles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_dbo.Users_dbo.Roles_RoleId]
GO
ALTER TABLE [dbo].[WishLists]  WITH CHECK ADD  CONSTRAINT [FK_dbo.WishLists_dbo.Products_ProductID] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WishLists] CHECK CONSTRAINT [FK_dbo.WishLists_dbo.Products_ProductID]
GO
ALTER TABLE [dbo].[WishLists]  WITH CHECK ADD  CONSTRAINT [FK_dbo.WishLists_dbo.Users_UserID] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WishLists] CHECK CONSTRAINT [FK_dbo.WishLists_dbo.Users_UserID]
GO
USE [master]
GO
ALTER DATABASE [shopfashe] SET  READ_WRITE 
GO
