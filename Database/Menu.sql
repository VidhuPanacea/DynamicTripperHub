/****** Object:  Table [dbo].[Menu]   Script Date: 09-09-2023 18:22:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Menu](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](4000) NULL,
	[ParentId] [int] NULL,
	[IsEnabled] [Bit] NULL,
	[IsDeleted] [Bit] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [varchar](200) NOT NULL,
	[ModifyDate] [datetime] NULL,
	[ModifyBy] [varchar](200) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Menu]ADD  CONSTRAINT [DF_Menu_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[Menu]ADD  CONSTRAINT [DF_Menu_CreatedBy]  DEFAULT ('System') FOR [CreatedBy]
GO


USE [CRM_DynamicWeb]
GO

SELECT [Id]
      ,[Name]
      ,[Description]
      ,[ParentId]
      ,[IsEnabled]
      ,[IsDeleted]
      ,[CreatedDate]
      ,[CreatedBy]
      ,[ModifyDate]
      ,[ModifyBy]
  FROM [dbo].[Menu]

GO



USE [CRM_DynamicWeb]
GO

INSERT INTO [dbo].[Menu]
           ([Name]
           ,[Description]
           ,[ParentId]
           ,[IsEnabled]
           ,[IsDeleted]           )
     VALUES
           ('Home'
           ,'Home Description'
           ,Null
           ,1
           ,0
           )
GO


