USE [master]
GO
/****** Object:  Database [shopfashe]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  User [nhat]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE USER [nhat] FOR LOGIN [nhat] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Abouts]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Abouts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[Detail] [nvarchar](max) NOT NULL,
	[CreatedDate] [datetime] NULL,
	[ModifileDate] [datetime] NULL,
	[Image] [nvarchar](max) NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Abouts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Actions]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[AnswerComments]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[AnswerReviews]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Categories]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[ParentID] [int] NULL,
	[Status] [bit] NOT NULL,
	[CreatedDate] [datetime] NULL,
	[ModifileDate] [datetime] NULL,
 CONSTRAINT [PK_dbo.Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Comments]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Contacts]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Contacts] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[FeedBacks]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FeedBacks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[Phone] [int] NOT NULL,
	[Content] [nvarchar](max) NULL,
	[Createad] [datetime] NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.FeedBacks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Footers]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Footers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](max) NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Footers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[hibernate_sequence]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hibernate_sequence](
	[next_val] [numeric](19, 0) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Menus]    Script Date: 6/9/2020 11:43:28 PM ******/
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
 CONSTRAINT [PK_dbo.Menus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[News]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Slug] [nvarchar](max) NOT NULL,
	[Images] [nvarchar](max) NOT NULL,
	[Summary] [nvarchar](max) NOT NULL,
	[Content] [nvarchar](max) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.News] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Notifies]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Orders]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Products]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[ReviewProducts]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[RoleActions]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Roles]    Script Date: 6/9/2020 11:43:28 PM ******/
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
/****** Object:  Table [dbo].[Sliders]    Script Date: 6/9/2020 11:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sliders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Images] [nvarchar](max) NOT NULL,
	[DisplayOrder] [int] NOT NULL,
	[Link] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Status] [bit] NOT NULL,
	[Created] [datetime] NULL,
	[ModifileDate] [datetime] NULL,
 CONSTRAINT [PK_dbo.Sliders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 6/9/2020 11:43:28 PM ******/
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
 CONSTRAINT [PK_dbo.Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[WishLists]    Script Date: 6/9/2020 11:43:28 PM ******/
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

INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (1, N'Xem danh mục', N'test')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (2, N'Thêm danh mục', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (3, N'Sửa danh mục', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (4, N'Xóa danh mục', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (5, N'Xem danh sách footer', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (6, N'Thêm Footer', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (7, N'Sửa Footer', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (8, N'Xóa Footer', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (9, N'Xem danh sách sản phẩm', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (10, N'Thêm sản phẩm', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (11, N'Sửa sản phẩm', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (12, N'Xóa sản phẩm', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (13, N'Xem danh sách Roles', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (14, N'Thêm Roles', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (15, N'Sửa Roles', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (16, N'Xóa Roles', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (17, N'Xóa Role Actions', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (18, N'Thêm Role Actions', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (19, N'Xem danh sách Slider', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (20, N'Thêm Slider', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (21, N'Sửa Slider', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (22, N'Xóa Slider', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (23, N'Xem danh sách User', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (24, N'Thêm User', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (25, N'Sửa User', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (26, N'Xóa User', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (27, N'Xem danh sách trang giới thiệu', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (28, N'Thêm giới thiệu', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (29, N'Sửa giới thiệu', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (30, N'Xóa giới thiệu', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (31, N'Xem danh sách trang tin tức', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (32, N'Thêm tin tức', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (33, N'Sửa tin tức', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (34, N'Xóa tin tức', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (35, N'Xem đơn hàng', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (36, N'Cật nhật đơn hàng', N'')
INSERT [dbo].[Actions] ([Id], [ActionName], [Description]) VALUES (37, N'VIEW', NULL)
SET IDENTITY_INSERT [dbo].[Actions] OFF
SET IDENTITY_INSERT [dbo].[AnswerComments] ON 

INSERT [dbo].[AnswerComments] ([Id], [CommentId], [UserId], [Content], [CreatedDate], [Status]) VALUES (1, 1, 1, N'd', CAST(N'2020-02-10 20:46:28.177' AS DateTime), 1)
INSERT [dbo].[AnswerComments] ([Id], [CommentId], [UserId], [Content], [CreatedDate], [Status]) VALUES (2, 1, 1, N'tếttsttste', CAST(N'2020-02-10 21:27:45.653' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[AnswerComments] OFF
SET IDENTITY_INSERT [dbo].[AnswerReviews] ON 

INSERT [dbo].[AnswerReviews] ([Id], [ReviewId], [UserId], [Content], [CreatedDate], [Status]) VALUES (1, 7, 1, N'oke', CAST(N'2020-02-05 16:39:28.877' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[AnswerReviews] OFF
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (7, N'Quần Áo Nam', N'quan-ao-nam', 0, 1, CAST(N'2019-10-14 15:32:54.743' AS DateTime), CAST(N'2019-12-09 16:03:01.000' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (8, N'Áo Vest Nam', N'ao-vest-nam', 7, 1, CAST(N'2019-10-14 15:33:10.897' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (9, N'Áo thun', N'ao-thun', 7, 1, CAST(N'2019-10-14 15:34:19.817' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (10, N'Túi Sách Nữ', N'tui-sach-nu', 0, 1, CAST(N'2019-10-14 15:41:03.457' AS DateTime), CAST(N'2019-10-14 15:42:27.987' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (11, N'Túi Sách Có Quai', N'tui-sach-co-quai', 10, 1, CAST(N'2019-10-14 15:41:58.667' AS DateTime), CAST(N'2019-10-14 15:42:38.387' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (12, N'Túi Sách Không Quai', N'tui-sach-khong-quai', 10, 1, CAST(N'2019-10-14 15:42:18.960' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (13, N'Quần áo nữ', N'quan-ao-nu', 0, 1, CAST(N'2019-10-14 16:17:36.960' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (14, N'Váy nữ', N'vay-nu', 13, 1, CAST(N'2019-10-14 16:19:29.400' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (15, N'quần jean nữ', N'quan-jean-nu', 13, 1, CAST(N'2019-10-14 16:19:39.753' AS DateTime), CAST(N'2019-10-14 16:19:49.867' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (16, N'Quần short nữ', N'quan-short-nu', 13, 1, CAST(N'2019-10-14 16:24:53.350' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (17, N'kính mắt', N'kinh-mat', 0, 1, CAST(N'2019-10-14 16:26:50.880' AS DateTime), NULL)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [ParentID], [Status], [CreatedDate], [ModifileDate]) VALUES (18, N'kính mắt nữ', N'kinh-mat-nu', 17, 1, CAST(N'2019-10-14 16:27:07.073' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[Comments] ON 

INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (1, 1, 497, N'aaaaaaaaa', CAST(N'2020-01-01 00:00:00.000' AS DateTime), CAST(N'2020-02-10 20:43:39.683' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (2, 1, 497, N'tetstst', CAST(N'2010-11-01 00:00:00.000' AS DateTime), CAST(N'2020-02-10 20:46:35.187' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (3, 1, 497, N'ssssssss', CAST(N'2020-02-10 20:46:35.673' AS DateTime), CAST(N'2020-02-10 20:46:35.673' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (4, 1, 497, N'tetstst', CAST(N'2020-02-10 20:46:36.227' AS DateTime), CAST(N'2020-02-10 20:46:36.227' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (5, 1, 497, N'tetstst', CAST(N'2020-02-10 20:46:37.193' AS DateTime), CAST(N'2020-02-10 20:46:37.193' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (6, 1, 497, N'tetstst', CAST(N'2016-01-01 00:00:00.000' AS DateTime), CAST(N'2020-02-10 20:46:37.757' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (7, 1, 497, N'tetstst', CAST(N'2015-01-01 00:00:00.000' AS DateTime), CAST(N'2020-02-10 20:46:40.307' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (11, 1, 497, N'demo', CAST(N'2010-01-01 00:00:00.000' AS DateTime), CAST(N'2010-01-01 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Comments] ([Id], [UserId], [ProductId], [Question], [CreatedDate], [ModifyDate], [Status]) VALUES (12, 1, 497, N'good', CAST(N'2020-02-10 21:41:06.157' AS DateTime), CAST(N'2020-02-10 21:41:06.157' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Comments] OFF
INSERT [dbo].[hibernate_sequence] ([next_val]) VALUES (CAST(1 AS Numeric(19, 0)))
SET IDENTITY_INSERT [dbo].[News] ON 

INSERT [dbo].[News] ([Id], [Slug], [Images], [Summary], [Content], [CreateDate], [Status]) VALUES (1, N'234', N'/Contents/Uploads/files/1.jpg', N'test blog', N'234', CAST(N'2100-01-01 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[News] ([Id], [Slug], [Images], [Summary], [Content], [CreateDate], [Status]) VALUES (2, N'25t', N'/Contents/Uploads/files/2.jpg', N'test blog', N'test4', CAST(N'2100-01-01 00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[News] OFF
SET IDENTITY_INSERT [dbo].[Notifies] ON 

INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (1, 1, N'Đơn hàng mã số 14 đã được giao.Bạn có thể đánh giá về sản phẩm', CAST(N'2020-02-10 21:42:13.317' AS DateTime), NULL, NULL, N'/Contents/Uploads/files/b8.jpg', N'/Order/ReViewOrder/cfa6936d-6ced-4021-b35d-af3103d7152b', 1)
INSERT [dbo].[Notifies] ([Id], [UserId], [Content], [CreatedDate], [ModifyDate], [EndDate], [Image], [Link], [Status]) VALUES (2, 1, N'Đơn hàng mã số 15 đã được giao.Bạn có thể đánh giá về sản phẩm', CAST(N'2020-02-10 21:42:19.787' AS DateTime), NULL, NULL, N'/Contents/Uploads/files/b10.jpg', N'/Order/ReViewOrder/850098bc-3954-40fd-9484-a6228737b8ff', 1)
SET IDENTITY_INSERT [dbo].[Notifies] OFF
SET IDENTITY_INSERT [dbo].[OrderDetails] ON 

INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (14, 497, 13, 200000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (15, 498, 14, 20000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (16, 500, 14, 5000, 2)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (17, 500, 15, 5000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (18, 497, 16, 200000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (19, 497, 17, 200000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (20, 497, 18, 200000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (21, 497, 19, 200000, 1)
INSERT [dbo].[OrderDetails] ([Id], [ProductId], [OrderId], [Price], [Quantity]) VALUES (22, 497, 20, 200000, 1)
SET IDENTITY_INSERT [dbo].[OrderDetails] OFF
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (13, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-05 16:27:49.000' AS DateTime), 3, NULL, N'')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (14, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-06 08:47:37.000' AS DateTime), 3, NULL, N'cfa6936d-6ced-4021-b35d-af3103d7152b')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (15, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-06 08:54:19.000' AS DateTime), 3, NULL, N'850098bc-3954-40fd-9484-a6228737b8ff')
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (16, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-02-10 21:41:46.640' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (17, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:17:25.060' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (18, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:19:00.527' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (19, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:23:50.267' AS DateTime), 0, NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [Name], [Email], [Phone], [Address], [Created], [Status], [Message], [VerifyCode]) VALUES (20, 1, N'34', N'ab83A8438@gmail.com', N'3422442566', N'54545', CAST(N'2020-05-11 21:28:05.513' AS DateTime), 0, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Orders] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (495, N'Áo Vest Nam 1', N'ao-vest-nam-1', N'Quần áo dành cho nam', N'/Contents/Uploads/files/m3.jpg', 100000, 90000, 8, N'/Contents/Uploads/files/m5.jpg;/Contents/Uploads/files/m6.jpg;', CAST(N'2019-10-14 15:38:42.663' AS DateTime), CAST(N'2019-10-14 16:13:29.027' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (496, N'Áo Vest Nam 2', N'ao-vest-nam-2', N'Quần áo dành cho nam
', N'/Contents/Uploads/files/m9.jpg', 500000, 499999, 8, N'/Contents/Uploads/files/m3.jpg;/Contents/Uploads/files/m5.jpg;', CAST(N'2019-10-14 15:40:18.407' AS DateTime), CAST(N'2019-10-14 16:12:42.733' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (497, N'Túi sách không quai 1', N'tui-sach-khong-quai-1', N'túi sách dành cho nữ
', N'/Contents/Uploads/files/ok9.jpg', 200000, NULL, 12, N'/Contents/Uploads/files/ok24.jpg;/Contents/Uploads/files/ok6.jpg;', CAST(N'2019-10-14 15:43:35.933' AS DateTime), CAST(N'2019-12-15 19:04:34.080' AS DateTime), 1, 1, 0, 0, 0, 1, 0, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (498, N'túi sách không quai 2', N'tui-sach-khong-quai-2', N'túi sách dành cho nữ', N'/Contents/Uploads/files/b8.jpg', 324324, 20000, 12, NULL, CAST(N'2019-10-14 15:44:26.140' AS DateTime), CAST(N'2019-12-24 13:31:41.617' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (499, N'túi sách không quai 3', N'tui-sach-khong-quai-3', N'túi sách dành cho nữ
', N'/Contents/Uploads/files/b1.jpg', 500000, 60000, 12, NULL, CAST(N'2019-10-14 15:45:15.473' AS DateTime), CAST(N'2019-12-15 19:00:33.457' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (500, N'túi sách không quai 4', N'tui-sach-khong-quai-4', N'túi sách dành cho nữ', N'/Contents/Uploads/files/b10.jpg', 10000, 5000, 12, NULL, CAST(N'2019-10-14 15:46:05.883' AS DateTime), CAST(N'2019-10-14 16:05:15.600' AS DateTime), 1, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (501, N'túi sách không quai 5', N'tui-sach-khong-quai-5', N'túi sách dành cho nữ
', N'/Contents/Uploads/files/b12.jpg', 10000000, NULL, 12, NULL, CAST(N'2019-10-14 15:46:57.817' AS DateTime), CAST(N'2019-12-09 16:44:10.357' AS DateTime), 0, 1, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (502, N'túi sách không quai 6', N'tui-sach-khong-quai-6', N'túi sách dành cho nữ
', N'/Contents/Uploads/files/b13.jpg', 30000, NULL, 12, NULL, CAST(N'2019-10-14 15:47:43.357' AS DateTime), CAST(N'2019-10-14 16:14:49.113' AS DateTime), 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (503, N'túi sách không quai 7', N'tui-sach-khong-quai-7', N'túi sách dành cho nữ', N'/Contents/Uploads/files/b14.jpg', 500000, NULL, 12, N'/Contents/Uploads/files/b15.jpg;', CAST(N'2019-10-14 16:14:18.683' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (504, N'túi sách không quai 9', N'tui-sach-khong-quai-9', N'túi sách dành cho nữ', N'/Contents/Uploads/files/b17.jpg', 500000, 11111, 12, NULL, CAST(N'2019-10-14 16:17:01.277' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (505, N'váy nữ 1', N'vay-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok6.jpg', 500000, NULL, 14, NULL, CAST(N'2019-10-14 16:21:15.147' AS DateTime), CAST(N'2019-12-15 19:03:31.097' AS DateTime), 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (506, N'váy nữ 2', N'vay-nu-2', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok29.jpg', 600000, NULL, 8, N'/Contents/Uploads/files/ok13.jpg;/Contents/Uploads/files/ok12.jpg;', CAST(N'2019-10-14 16:21:55.273' AS DateTime), CAST(N'2020-02-06 11:19:23.773' AS DateTime), 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (507, N'váy nữ 3', N'vay-nu-3', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok7.jpg', 1000000, NULL, 14, NULL, CAST(N'2019-10-14 16:22:58.803' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (508, N'váy nữ 4', N'vay-nu-4', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok10.jpg', 20000, NULL, 15, NULL, CAST(N'2019-10-14 16:23:38.067' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (509, N'Quần short nữ 1', N'quan-short-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/ok28.jpg', 500000, NULL, 16, NULL, CAST(N'2019-10-14 16:26:00.777' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (510, N'kính mắt nữ 1', N'kinh-mat-nu-1', N'sản phẩm dành cho nữ', N'/Contents/Uploads/files/c15.jpg', 20000, NULL, 18, N'/Contents/Uploads/files/c10.jpg;/Contents/Uploads/files/c12.jpg;/Contents/Uploads/files/c13.jpg;', CAST(N'2019-10-14 16:28:48.317' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Content], [Images], [Price], [Sale_Price], [Category_ID], [MoreImages], [CreatedDate], [ModifileDate], [Status], [TopHot], [Star1], [Star2], [Star3], [Star4], [Star5], [AverageStar]) VALUES (511, N'kính mắt nữ 2', N'kinh-mat-nu-2', N'sản phẩm dành cho nữ', N'https://firebasestorage.googleapis.com/v0/b/shopdemo-a7f84.appspot.com/o/test%2F1591664048186?alt=media&token=bdb95e9a-17aa-4995-9e42-cd0d8984f70f', 10000, NULL, 18, N'/Contents/Uploads/files/c17.jpg;/Contents/Uploads/files/c18.jpg;/Contents/Uploads/files/c19.jpg;', CAST(N'2019-10-14 16:29:29.793' AS DateTime), NULL, 1, 0, 0, 0, 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[Products] OFF
SET IDENTITY_INSERT [dbo].[ReviewProducts] ON 

INSERT [dbo].[ReviewProducts] ([Id], [ProductId], [OrderId], [Rate], [Content], [CreatedDate], [EndDate], [Status], [Image]) VALUES (7, 497, 13, 4, N'565', CAST(N'2020-02-05 16:28:32.440' AS DateTime), NULL, 1, NULL)
SET IDENTITY_INSERT [dbo].[ReviewProducts] OFF
SET IDENTITY_INSERT [dbo].[RoleActions] ON 

INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (1, 1, 2)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (2, 1, 3)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (3, 1, 4)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (4, 1, 1)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (5, 1, 5)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (6, 1, 6)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (7, 1, 7)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (8, 1, 8)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (9, 1, 9)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (10, 1, 10)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (11, 1, 11)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (12, 1, 12)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (13, 1, 13)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (14, 1, 14)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (15, 1, 15)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (16, 1, 16)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (17, 1, 17)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (18, 1, 18)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (19, 1, 19)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (20, 1, 20)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (21, 1, 21)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (22, 1, 22)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (23, 1, 23)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (24, 1, 24)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (25, 1, 25)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (26, 1, 26)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (27, 1, 27)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (28, 1, 28)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (29, 1, 29)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (30, 1, 30)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (31, 1, 31)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (32, 1, 32)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (33, 1, 33)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (34, 1, 34)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (35, 1, 35)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (37, 3, 36)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (38, 1, 37)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (39, 3, 1)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (40, 3, 2)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (41, 3, 3)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (42, 3, 4)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (43, 3, 5)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (44, 3, 6)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (45, 3, 7)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (54, 4, 9)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (55, 4, 10)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (56, 4, 11)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (57, 4, 12)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (58, 4, 13)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (59, 1, 36)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (60, 4, 14)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (61, 4, 15)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (62, 4, 16)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (63, 4, 17)
INSERT [dbo].[RoleActions] ([Id], [RoleId], [ActionId]) VALUES (64, 4, 18)
SET IDENTITY_INSERT [dbo].[RoleActions] OFF
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (1, N'admin', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (2, N'member', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (3, N'manager', NULL)
INSERT [dbo].[Roles] ([Id], [RoleName], [Description]) VALUES (4, N'a', N'233aaâ')
SET IDENTITY_INSERT [dbo].[Roles] OFF
SET IDENTITY_INSERT [dbo].[Sliders] ON 

INSERT [dbo].[Sliders] ([Id], [Images], [DisplayOrder], [Link], [Description], [Status], [Created], [ModifileDate]) VALUES (1, N'/Contents/Uploads/files/master-slide-03.jpg', 3, N'1', NULL, 1, CAST(N'2019-10-14 11:05:30.133' AS DateTime), CAST(N'2020-02-06 11:33:59.447' AS DateTime))
INSERT [dbo].[Sliders] ([Id], [Images], [DisplayOrder], [Link], [Description], [Status], [Created], [ModifileDate]) VALUES (3, N'/Contents/Uploads/files/master-slide-01.jpg', 3, N'1', NULL, 1, CAST(N'2019-10-14 11:05:58.147' AS DateTime), CAST(N'2019-10-14 16:34:20.443' AS DateTime))
INSERT [dbo].[Sliders] ([Id], [Images], [DisplayOrder], [Link], [Description], [Status], [Created], [ModifileDate]) VALUES (4, N'/Contents/Uploads/files/master-slide-06.jpg', 4, NULL, NULL, 1, CAST(N'2019-10-14 16:35:06.863' AS DateTime), CAST(N'2019-12-15 19:13:04.850' AS DateTime))
SET IDENTITY_INSERT [dbo].[Sliders] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender]) VALUES (1, 1, N'admin', N'1', CAST(N'2019-09-20 21:02:41.477' AS DateTime), CAST(N'2019-12-15 19:05:40.967' AS DateTime), N'34', N'3422442566', N'ab83A8438@gmail.com', N'54545', 1, NULL, N'/Contents/Uploads/download.jfif', NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender]) VALUES (8, 2, N'admin3', N'c4ca4238a0b923820dcc509a6f75849b', CAST(N'2019-09-21 07:32:45.920' AS DateTime), NULL, N'r', N'0967767190', N'1@gmail.com', N'54545', 1, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender]) VALUES (9, 2, N'loremipsum', N'c6092cd795bac4fb79a76072f88019f1', CAST(N'2019-12-15 19:23:35.707' AS DateTime), NULL, N'khanh', N'0999999999', N'khanh@mail.com', N'Đéo cho', 1, NULL, NULL, N'Nam')
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender]) VALUES (10, 2, N'nguyennhat98', N'202cb962ac59075b964b07152d234b70', CAST(N'2019-12-15 20:03:45.150' AS DateTime), NULL, N'nguyennhat98', N'0123843957', N'nguyennhat98@gmail.com', N'Ha Noi', 1, NULL, NULL, N'Nam')
INSERT [dbo].[Users] ([Id], [RoleId], [UserName], [Password], [CreatedDate], [EditedDate], [FullName], [Phone], [Email], [Address], [Status], [RessetPasswordCode], [Image], [Gender]) VALUES (11, 2, N'Hangxinhdep', N'25d55ad283aa400af464c76d713c07ad', CAST(N'2020-01-25 18:40:42.623' AS DateTime), NULL, N'Hằng cute', N'0985703182', N'Hoahauhang@gmail.com', N'Dinh thự của Hằng', 1, NULL, NULL, N'Nữ')
SET IDENTITY_INSERT [dbo].[Users] OFF
SET IDENTITY_INSERT [dbo].[WishLists] ON 

INSERT [dbo].[WishLists] ([Id], [UserID], [ProductID]) VALUES (13, 1, 497)
INSERT [dbo].[WishLists] ([Id], [UserID], [ProductID]) VALUES (14, 1, 511)
INSERT [dbo].[WishLists] ([Id], [UserID], [ProductID]) VALUES (15, 1, 498)
SET IDENTITY_INSERT [dbo].[WishLists] OFF
/****** Object:  Index [IX_CommentId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_CommentId] ON [dbo].[AnswerComments]
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AnswerComments]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ReviewId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ReviewId] ON [dbo].[AnswerReviews]
(
	[ReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AnswerReviews]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ParentID]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ParentID] ON [dbo].[Categories]
(
	[ParentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[Comments]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Comments]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Notifies]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_OrderId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_OrderId] ON [dbo].[OrderDetails]
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[OrderDetails]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Orders]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Category_ID]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_Category_ID] ON [dbo].[Products]
(
	[Category_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_OrderId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_OrderId] ON [dbo].[ReviewProducts]
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[ReviewProducts]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActionId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ActionId] ON [dbo].[RoleActions]
(
	[ActionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoleId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[RoleActions]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_RoleId]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[Users]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductID]    Script Date: 6/9/2020 11:43:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_ProductID] ON [dbo].[WishLists]
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserID]    Script Date: 6/9/2020 11:43:28 PM ******/
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
