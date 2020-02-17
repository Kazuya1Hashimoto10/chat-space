# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Columm|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|pass|string|null: false|
|group_id|integer|null: false, foreign_key: true|

### association
- has_many :messages
- has_many :groups, through: :users_groups

### index
- add_index :users, :name
- add_index :users, :email, unique:true

## groupsテーブル

|Columm|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false, foreign_key: true|

## association
- has_many :messages
- has_many :users, through: :users_groups

### index
- add_index :groups, :name

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foregin_key: true|

### Association
- belongs_to :users
- belongs_to :groups
